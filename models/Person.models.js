const Person = require('./Person.sql')
async function getAllInformation() {
    return await Person.findAll()
  }

async function addNewInformation(details){
  return await Person.create(details)
}

module.exports = {getAllInformation, addNewInformation}