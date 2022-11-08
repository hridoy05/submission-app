const express = require('express')
const { httpGetAllCountries } = require('../controllers/countries.controller')

const countryRoutes = express.Router()

countryRoutes.get('/',httpGetAllCountries)


module.exports = countryRoutes