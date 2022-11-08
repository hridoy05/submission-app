const { getAllInformation } = require("../models/Person.models");


async function httpGetAllInformation (req, res){
    return res.status(200).json(await getAllInformation()); 
}

module.exports = {httpGetAllInformation}