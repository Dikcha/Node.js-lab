const gulp = require('gulp');
const path = require('path');
const shell = require('gulp-shell');
const clean = require('gulp-clean');

const constPath = 'src/**/!(*.js|*.ts)'
const backendPath = 'src';
const backendDistPath = 'dist';
const tscPath = path.join('node_modules', '.bin', 'tsc');

function cleanDist() {
    return gulp.src('dist', { read: false, allowEmpty: true }).pipe(clean());
}

async function copyConstFiles() {
    return gulp.src([constPath], { base: backendPath })
        .pipe(gulp.dest(backendDistPath));
}

const tsc = shell.task(tscPath);
const build = gulp.series(cleanDist, tsc, copyConstFiles);

gulp.task('build', build);