const gplay = require('google-play-scraper');
const qs = require('querystring');
const path = require('path');

exports.GetListApp = async (req) => {
    let query = {
        category: req.query.category.toUpperCase(),
        collection: gplay.collection.TOP_FREE,
        num: req.query.num
    }
    let response = await gplay.list(query);
    return toList(response.map(cleanUrls(req)));
}

exports.GetByAppId = async (req) => {
    const opts = Object.assign({ appId: req.params.appId }, req.query);
    let response = await gplay.app(opts);
    return cleanUrls(response);
}

exports.GetListSearch = async (req) => {
    const opts = Object.assign({ term: req.query.q }, req.query);

    let response = await gplay.search(opts);
    return toList(response.map(cleanUrls(req)));
}

exports.GetBySimilar = async (req) => {
    const opts = Object.assign({ appId: req.params.appId }, req.query);
    let response = await gplay.similar(opts);
    return toList(response.map(cleanUrls(req)));
}

exports.GetByDatasafety = async (req) => {
    const opts = Object.assign({ appId: req.params.appId }, req.query);
    let response = await gplay.datasafety(opts);
    return toList(response.map(cleanUrls(req)));
}

exports.GetByPermissions = async (req) => {
    const opts = Object.assign({ appId: req.params.appId }, req.query);
    let response = await gplay.permissions(opts);
    return toList(response);
}

exports.GetReviews = async (req) => {
    const opts = Object.assign({ appId: req.params.appId }, req.query);
    let response = await gplay.reviews(opts);
    return toList(response);
}

exports.GetSuggest = async (req) => {
    let response = await gplay.suggest({ term: req.query.suggest });
    return toList(response);
}

exports.GetCategories = async () => {
    return await gplay.categories();
}

const toList = (apps) => ({ results: apps });

const cleanUrls = (req) => (app) => Object.assign({}, app, {
    playstoreUrl: app.url,
    url: buildUrl(req, 'apps/' + app.appId),
    permissions: buildUrl(req, 'apps/' + app.appId + '/permissions'),
    similar: buildUrl(req, 'apps/' + app.appId + '/similar'),
    reviews: buildUrl(req, 'apps/' + app.appId + '/reviews'),
    datasafety: buildUrl(req, 'apps/' + app.appId + '/datasafety'),
    developer: {
        devId: app.developer,
        url: buildUrl(req, 'developers/' + qs.escape(app.developer))
    },
    categories: buildUrl(req, 'categories/')
});

const buildUrl = (req, subpath) =>
    req.protocol + '://' + path.join(req.get('host'), req.baseUrl, subpath);