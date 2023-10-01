const express = require('express');
const path = require('path');
const service = require('./services');

const router = express.Router();

const buildUrl = (req, subpath) =>
  req.protocol + '://' + path.join(req.get('host'), req.baseUrl, subpath);

/* Index */
router.get('/', (req, res) =>
  res.json({
    apps: buildUrl(req, 'apps'),
    developers: buildUrl(req, 'developers'),
    categories: buildUrl(req, 'categories')
  }));

/* App search */
router.get('/apps/', async function (req, res, next) {
  return service.GetListSearch(req, res, next)
});

/* Search suggest */
router.get('/apps/', function (req, res, next) {
  return service.GetSuggest(req, res, next)
});

/* App list */
router.get('/apps/', async function (req, res, next) {
  const result = await service.GetListApp(req, res, next);
  res.status(200).json(result);
});


/* App detail*/
router.get('/apps/:appId', function (req, res, next) {
  return service.GetByAppId(req, res, next)
});

/* Similar apps */
router.get('/apps/:appId/similar', function (req, res, next) {
  return service.GetBySimilar(req, res, next)
});

/* Data Safety */
router.get('/apps/:appId/datasafety', function (req, res, next) {
  return service.GetByDatasafety(req, res, next)
});

/* App permissions */
router.get('/apps/:appId/permissions', function (req, res, next) {
  return service.GetByPermissions(req, res, next)
});

/* App reviews */
router.get('/apps/:appId/reviews', function (req, res, next) {
  return service.GetReviews(req, res, next)
});


/* Category list */
router.get('/categories/', function (req, res, next) {
  return service.GetCategories(req, res, next)
});


function errorHandler(err, req, res, next) {
  res.status(400).json({ message: err.message });
  next();
}

router.use(errorHandler);

module.exports = router;
