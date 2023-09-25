const { default: mongoose } = require("mongoose");
const Developer = require('./developer.model')
const Permission = require('./permission.model')

const schema = new mongoose.Schema({
    title: {
        type: String,
    },
    appId: {
        type: String
    },
    url: {
        type: String,
    },
    icon: {
        type: String
    },
    developer: {
        type: Developer,
    },
    currency: {
        type: String
    },
    price: {
        type: String,
    },
    free: {
        type: String
    },
    summary: {
        type: String,
    },
    scoreText: {
        type: String
    },
    score: {
        type: String
    },
    playstoreUrl: {
        type: String,
    },
    permissions: {
        type: Permission
    },
    similar: {
        type: String
    },
    reviews: {
        type: String,
    },
    datasafety: {
        type: String
    },
    categories: {
        type: String
    },
    createAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
    },
});

const model = mongoose.model('Apps', schema);

module.exports = model;
