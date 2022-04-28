const { Sequelize } = require("sequelize");

module.exports = new Sequelize(
    process.env.DB_NAME || "online_shop",
    process.env.DB_USER || "postgres",
    process.env.DB_PASSWORD || "admin",
    {
        dialect: "postgres",
        host: process.env.DB_HOST || "localhost",
        port: 8080,
        pool: {
            max: 100,
            min: 0,
            idle: 200000,
            // @note https://github.com/sequelize/sequelize/issues/8133#issuecomment-359993057
            acquire: 1000000,
        },
    }
);
