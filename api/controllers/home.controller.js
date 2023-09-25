const chapterService = require("../services/chapter");
const Chapter = require('../models/chapter')

exports.migreateData = async (req, res) => {
  try {
    let result = [];
    result = await chapterService.getAll(req, res);
    res.status(200).json({
      status: true,
      result
    });
  } catch (error) {
    console.error("Error crawling data:", error);
    res.status(200).json({
      status: false,
    });
  }
};
