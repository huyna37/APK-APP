const express = require('express');
const router = express.Router();
const controller = require('../controllers/app.controller')

router.get('/', controller.migrateData)
router.get('/category', controller.getListCategory)
router.get('/migrateSimilar', controller.updateSimilarData)

module.exports = router;