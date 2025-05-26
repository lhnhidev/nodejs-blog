const express = require('express');
const router = express.Router();
const coursesController = require('../controller/courses.controller');

router.get('/:slug', coursesController.show);

module.exports = router;
