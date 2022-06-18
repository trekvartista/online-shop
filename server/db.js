const { Sequelize } = require("sequelize");
const pg = require('pg')
// import * as pg from 'pg';
// import { Sequelize } from 'sequelize';

const sequelize = new Sequelize(
    process.env.DB_NAME || "online_shop",
    process.env.DB_USER || "postgres",
    process.env.DB_PASSWORD || "root",
    {
        dialect: "postgres",
        dialectModule: pg,
        host: process.env.DB_HOST || "localhost",
        port: process.env.DB_PORT || 5432,
    }
);
module.exports = sequelize
