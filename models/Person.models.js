const Person = require('./Person.sql')
async function getAllInformation() {
    return await Person.findAll()
  }

async function addNewInformation(details){
  return await Person.create(details)
}

async function deleteInformation(id){
  
  return await Person.destroy({
    where:{
      id: id
    }
  })
}

module.exports = {getAllInformation, addNewInformation, deleteInformation}