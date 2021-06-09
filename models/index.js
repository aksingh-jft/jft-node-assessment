const fs = require(`fs`);
require('dotenv').config();
const path = require(`path`);
const Sequelize = require(`sequelize`);
const moment = require('moment');
const DB_CONFIG = require("../configs/dbConfig");
let sequelize;

sequelize = new Sequelize(DB_CONFIG.config.database, DB_CONFIG.config.user, DB_CONFIG.config.password, {
    host: 'localhost',
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});

const db = {}

db.sequelize = sequelize;
db.Sequelize = Sequelize;




Object.keys(db).forEach(function(modelName) {
    if (`associate` in db[modelName]) {
        db[modelName].associate(db);
    }
});

module.exports = db;