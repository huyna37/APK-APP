const appService = require('../models/app.model');
const categoryService = require('../models/category.model');
const GPlayService = require('../lib/services')

exports.migrateData = async (req, res) => {
  try {
    const listApp = await GPlayService.GetListApp(req);
    await appService.insertMany()
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
