const express = require('express');
const DevController = require('./Controllers/DevController');

const routes = express.Router();

routes.get('/', (req, res) => {
  return res.send('Hello World');
});

routes.post('/devs', DevController.store);

module.exports = routes;
