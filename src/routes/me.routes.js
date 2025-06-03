const express = require('express');
const router = express.Router();
const meController = require('../controller/me.controller.js');

router.get('/my-courses', meController.show);
router.delete('/my-courses', meController.delete);

module.exports = router;
