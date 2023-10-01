const { default: mongoose } = require("mongoose");

const schema = new mongoose.Schema({
    id: String,
    userName: String,
    userImage: String,
    date: Date,
    score: Number,
    scoreText: String,
    url: String,
    title: String,
    text: String,
    replyDate: Date,
    replyText: String,
    version: String,
    thumbsUp: Number,
    criterias: [{
        criteria: String,
        rating: Number,
    }], // Assuming criterias is an array of strings
    appId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'App',
    },
    createAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
    },
});

const model = mongoose.model('Review', schema);

module.exports = model;
