const { default: mongoose } = require("mongoose");

const schema = new mongoose.Schema({
    id: {
        type: String,
    },
    userName: {
        type: String
    },
    userImage: {
        type: String,
    },
    date: {
        type: String
    },
    score: {
        type: String,
    },
    scoreText: {
        type: String
    },
    url: {
        type: String,
    },
    title: {
        type: String
    },
    text: {
        type: String,
    },
    replyDate: {
        type: String
    },
    replyText: {
        type: String,
    },
    version: {
        type: String
    },
    thumbsUp: {
        type: String,
    },
    criterias: {
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

const model = mongoose.model('Permissions', schema);

module.exports = model;
