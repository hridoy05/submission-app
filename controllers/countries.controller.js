const { getAllCountries } = require("../models/Countries.models");

async function httpGetAllCountries(req, res){
    return res.status(200).json(await getAllCountries()); 
}

module.exports = {httpGetAllCountries}