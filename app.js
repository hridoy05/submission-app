const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const personRoutes = require('./routes/person.routes')
const countryRoutes = require('./routes/countries.routes')

const app = express();

app.use(morgan('combined'));
app.use(express.json());
app.use('/', personRoutes)
app.use('/countries', countryRoutes)

module.exports = app;