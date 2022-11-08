const Person = require('./Person.sql')
async function getAllInformation() {
    return await Person.findAll()
  }

module.exports = {getAllInformation}