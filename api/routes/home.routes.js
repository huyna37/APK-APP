const express = require('express');
const router = express.Router();
const controller = require('../controllers/home.controller')

router.get('/', controller.getAll)
router.get('/similar/', controller.getSimilarApp)
router.get('/:id', controller.getById)

module.exports = router;