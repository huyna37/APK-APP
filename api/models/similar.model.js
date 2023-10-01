const { default: mongoose } = require("mongoose");

const schema = new mongoose.Schema({
  url: String,
  appId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'App',
  },
  summary: String,
  developer: String,
  developerId: String,
  icon: String,
  score: Number,
  scoreText: String,
  priceText: String,
  free: Boolean,
});

const model = mongoose.model('Similar', schema);

module.exports = model;
