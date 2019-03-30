import { Sequelize } from 'sequelize-typescript';
import { PropertiesModel } from "../../app/models/properties";
import { AgentsModel } from "../../app/models/agents";
import { OfficesModel } from "../../app/models/offices";

const sequelize = new Sequelize({
    database: process.env.DBNAME,
    username: process.env.DBUSER,
    password: process.env.DBPASS,
    host: process.env.DBHOST,
    dialect: 'mysql',
    logging: false,
    operatorsAliases: false
});

sequelize.addModels([
    PropertiesModel,
    AgentsModel,
    OfficesModel,
])
module.exports = sequelize;