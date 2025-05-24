const express = require('express');
const route = express.Router();
const searchController = require('../controller/search.controller');

route.get('/', searchController.index);

module.exports = route;
