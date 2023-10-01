const express = require('express');
const router = express.Router();
const controller = require('../controllers/app.controller')

router.get('/', controller.migrateData)
router.get('/category', controller.getListCategory)

module.exports = router;