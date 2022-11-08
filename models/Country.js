const {Sequelize, DataTypes} = require('sequelize')
const sequelize = require('../db/connect')

const Country = sequelize.define('country',{
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    code: {
        type: DataTypes.STRING,
        allowNull: false
    },
   
})

module.exports = Country