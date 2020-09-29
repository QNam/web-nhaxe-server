const Sequelize = require('sequelize');
const WebModel = require('./models/Web')

var sequelize = new Sequelize(process.env.DATABASE_DATABASE, process.env.DATABASE_USER, process.env.DATABASE_PASSWORD, {
    host: process.env.DATABASE_HOST,
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    },
})

const Web = WebModel(sequelize, Sequelize)

module.exports = {
    Web
} 