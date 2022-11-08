const {Sequelize, DataTypes} = require('sequelize')
const sequelize = require('../db/connect')

const Countries = sequelize.define('Countries',{
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    country_code: {
        type: DataTypes.STRING,
        allowNull: false
    },
    country_name: {
        type: DataTypes.STRING,
        allowNull: false
    }
   
}, {timestamps: false})

module.exports = Countries