const express = require('express');
const router = express.Router();
const coursesController = require('../controller/courses.controller');

router.get('/:slug', coursesController.show);
router.get('/:id/edit', coursesController.edit);
router.put('/:id', coursesController.update);
router.delete('/:id/delete', coursesController.delete);

module.exports = router;
