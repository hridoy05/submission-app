const Countries = require('./Countries.sql')
async function getAllCountries() {
    return await Countries.findAll()
  }

module.exports = {getAllCountries}