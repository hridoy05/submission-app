const express = require('express')
const { httpGetAllInformation, httpAddInformation } = require('../controllers/person.controller')
const personRoutes = express.Router()
const multer = require("multer")

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "./uploads/");
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname);
    },
  });
  
const upload = multer({ storage: storage });

personRoutes.get('/',httpGetAllInformation)
personRoutes.post('/add', upload.single("file"),httpAddInformation)
personRoutes.delete('/:id')

module.exports = personRoutes