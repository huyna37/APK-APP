const Extention = require('../unity/extention')
const App = require('../models/app.model');
const Similar = require('../models/similar.model');

exports.GetAll = async (req) => {
    const sortField = req?.query?.sortField ?? "createAt";
    const sortOrder = req?.query?.sortOrder ?? "asc";
    let { filterOptions, populateOptions, filter } = req.query;
    if (filterOptions?.isObjectString(filterOptions)) {
        filterOptions = JSON.parse(filterOptions);
    }
    if (populateOptions?.isObjectString(populateOptions)) {
        populateOptions = JSON.parse(populateOptions);
    }
    if (filter?.isObjectString(filter)) {
        filter = JSON.parse(filter);
    }
    const data = await Extention.getPaginatedData(
        req.query.page,
        req.query.limit,
        App,
        sortField,
        sortOrder,
        filterOptions,
        populateOptions,
        filter
    );
    return data;
}

exports.GetById = async (req) => {
    if (!req.id) {
        return null;
    }
    const data = await App.findOne({appId: req.id});
    return data;
}

exports.getSimilarApp = async (req) => {
    if (!req.id) {
        return null;
    }
    const data = await Similar.find({appId: req.id}).limit(parseInt(req.limit));
    return data;
}