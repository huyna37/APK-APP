const { default: mongoose } = require("mongoose");

const schema = new mongoose.Schema({
    devId: {
        type: String,
    },
    url: {
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

const model = mongoose.model('Developers', schema);

module.exports = model;
