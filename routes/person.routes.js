const express = require('express')
const { httpGetAllInformation } = require('../controllers/person.controller')
const personRoutes = express.Router()

personRoutes.get('/',httpGetAllInformation)
personRoutes.post('/')
personRoutes.delete('/:id')

module.exports = personRoutes