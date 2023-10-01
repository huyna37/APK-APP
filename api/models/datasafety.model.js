const { default: mongoose } = require("mongoose");

const schema = new mongoose.Schema({
    dataShared: [
        {
            data: String,
            optional: Boolean,
            purpose: String,
            type: String
        }
    ],
    dataCollected: [
        {
            data: String,
            optional: Boolean,
            purpose: String,
            type: String
        }
    ],
    securityPractices: [
        {
            practice: String,
            description: String,
        }
    ],
    privacyPolicyUrl: {
        type: String
    },
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

const model = mongoose.model('Datasafety', schema);

module.exports = model;
