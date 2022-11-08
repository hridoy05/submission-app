const {Sequelize , DataTypes}= require('sequelize')
const sequelize = require('../db/connect')

const Person = sequelize.define('person',{
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    dob: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    country: {
        type: DataTypes.STRING,
        allowNull: false
    },
    resumeUrl: {
        type: DataTypes.STRING,
        allowNull: false
    },

},{ tableName: 'Person'})

module.exports = Person