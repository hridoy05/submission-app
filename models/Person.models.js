const Person = require('./Person.sql')
async function getAllInformation(sort="default") {
  console.log("model", sort);
  if(sort=='name') {
    return await Person.findAll({order:[
      ['name']
    ]})
  }else if (sort=='dob'){
    return await Person.findAll({order:[[sort, 'ASC']]})
  }else{
    return await Person.findAll()
  }
    
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