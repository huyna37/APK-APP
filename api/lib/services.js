const gplay = require('google-play-scraper');
const qs = require('querystring');
const path = require('path');

exports.GetListApp = async (req) => {
    let response = await gplay.list(req);
    return toList(response);
}

exports.GetByAppId = async (req) => {
    try {
        return await gplay.app({ appId: req });
    }
    catch (e) {
        console.log('GetByAppId', e)
    }
}

exports.GetListSearch = async (req) => {
    const opts = Object.assign({ term: req.query.q }, req.query);

    let response = await gplay.search(opts);
    return toList(response.map(cleanUrls(req)));
}

exports.GetBySimilar = async (req) => {
    try {
        let response = await gplay.similar(req);
        return toList(response);
    }
    catch (e) {
    }

}

exports.GetByDatasafety = async (req) => {
    try {
        let response = await gplay.datasafety(req);
        return toList(response);
    }
    catch (e) {
        console.log('GetByDatasafety', e)
    }

}

exports.GetByPermissions = async (req) => {
    try {
        let response = await gplay.permissions(req);
        return toList(response);
    }
    catch (e) {
        console.log('GetByPermissions', e)
    }

}

exports.GetReviews = async (req) => {
    try {
        let response = await gplay.reviews(req);
        return toList(response);
    }
    catch (e) {
        console.log('GetReviews', e)
    }

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