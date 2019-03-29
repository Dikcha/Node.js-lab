const gulp = require('gulp');
const path = require('path');
const shell = require('gulp-shell');
const clean = require('gulp-clean');

const constPath = 'src/**/!(*.js|*.ts)'
const backendPath = 'src';
const backendDistPath = 'dist';
const tscPath = path.join('node_modules', '.bin', 'tsc');
require('dotenv').config()

function cleanDist() {
    return gulp.src('dist', { read: false, allowEmpty: true }).pipe(clean());
}

async function copyConstFiles() {
    return gulp.src([constPath], { base: backendPath })
        .pipe(gulp.dest(backendDistPath));
}

async function sequelizeSync() {
    const sequelize = sequelizeInit();
    try {
        await sequelize.sync({ force: true });
    }
    catch (err) {
        throw err;
    }
    finally {
        await sequelize.close();
    }
}

function sequelizeInit() {
    const sequelize = require('./dist/database/sequelize/index');

    return sequelize;
}

const tsc = shell.task(tscPath);
const build = gulp.series(cleanDist, tsc, copyConstFiles);
const dbInit = gulp.series(
    sequelizeSync,
    build
);

gulp.task('build', build);
gulp.task('db-init', dbInit);