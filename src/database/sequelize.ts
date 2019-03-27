import {Sequelize} from 'sequelize-typescript';
import {PropertiesModel} from "../models/properties";

const sequelize = new Sequelize({
    database: process.env.DBNAME,
    username: process.env.DBUSER,
    password: process.env.DBPASS,
    host: process.env.DBHOST,
    dialect: 'mysql',
});

sequelize.addModels([
    PropertiesModel
])