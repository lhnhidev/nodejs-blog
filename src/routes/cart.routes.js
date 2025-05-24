const express = require('express');
const route = express.Router();
const carController = require('../controller/cart.controller');

route.get('/', carController.index);

module.exports = route;
