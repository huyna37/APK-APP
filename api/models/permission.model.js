const { default: mongoose } = require("mongoose");

const schema = new mongoose.Schema({
    permission: {
        type: String,
    },
    type: {
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
