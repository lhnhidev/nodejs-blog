const express = require('express');
const router = express.Router();
const trashController = require('../controller/trash.controller');

router.get('/', trashController.show);

module.exports = router;
