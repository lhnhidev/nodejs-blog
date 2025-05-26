const express = require('express');
const route = express.Router();
const createController = require('../controller/create.controller');

route.get('/', createController.index);

route.post('/', createController.create);

module.exports = route;
