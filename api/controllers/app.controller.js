const AppModel = require('../models/app.model');
const ReviewModel = require('../models/review.model');
const SimilarModel = require('../models/similar.model');
const PermissionModel = require('../models/permission.model');
const DateSafetyModel = require('../models/datasafety.model');
const GPlayService = require('../lib/services')
const gplay = require('google-play-scraper');

// Define a function to migrate data for a single app
const migrateAppData = async (appId) => {
  const detail = await GPlayService.GetByAppId(appId);

  // Check if the app already exists
  const isExists = await AppModel.findOne({ appId: detail?.appId });

  if (!isExists && detail) {
    // Create and save the app document to the database
    const newApp = new AppModel(detail);
    await newApp.save();

    // Get and save reviews for the app
    const review = await GPlayService.GetReviews({
      appId: detail.appId,
      sort: gplay.sort.RATING,
      num: 50,
    });

    if (review && review.results?.data) {
      review.appId = newApp.id;
      const reviewsWithAppId = review.results?.data?.map(reviewItem => ({
        ...reviewItem,
        appId: newApp.id,
      }));

      // Use insertMany to insert all reviews at once
      await ReviewModel.insertMany(reviewsWithAppId);
    }

    const similar = await GPlayService.GetBySimilar({ appId: detail?.appId });
    if (similar?.results?.length > 0) {
      const similarsWithAppId = similar?.results?.map(similarItem => ({
        ...similarItem,
        appId: newApp.id,
      }));

      await SimilarModel.insertMany(similarsWithAppId);
    }
    else {
      console.log("Similar app not found", detail.appId)
    }


    const permissions = await GPlayService.GetByPermissions({ appId: detail?.appId });
    if (permissions.results?.length > 0) {
      const permissionsWithAppId = permissions.results?.map(permissionItem => ({
        ...permissionItem,
        appId: newApp.id,
      }));

      await PermissionModel.insertMany(permissionsWithAppId);
    }

    const datasafety = await GPlayService.GetByDatasafety({ appId: detail?.appId });
    datasafety.results.appId = newApp.id;


    await DateSafetyModel.create(datasafety.results);
  }
};

exports.migrateData = async (req, res) => {
  try {
    const categories = GetListCategory();
    const collections = Object.keys(gplay.collection); // Assuming 'gplay.collection' is an object

    for (const category of categories) {
      for (const collection of collections) {
        const query = {
          category,
          collection,
          num: 10000,
        };

        const listApp = await GPlayService.GetListApp(query);
        if (!listApp?.results) continue;
        for (const appResult of listApp.results) {
          await migrateAppData(appResult?.appId);
        }
      }
    }

    res.status(200).json({
      status: true,
      message: 'Data migration completed successfully',
    });
  } catch (error) {
    console.error('Error crawling data:', error);
    res.status(500).json({
      status: false,
      message: 'Error crawling data',
    });
  }
};


exports.getListCategory = async (req, res) => {
  try {
    res.status(200).json(GetListCategory());
  }
  catch (err) {
    console.error("Error crawling data:", error);
    res.status(200).json({
      status: false,
    });
  }
}

exports.updateSimilarData = async (req, res) => {
  try {
    const limit = 200;
    const total = await SimilarModel.countDocuments();
    const totalPages = Math.ceil(total / limit);

    for (let page = 1; page <= totalPages; page++) {
      const list = await SimilarModel.find()
        .skip((page - 1) * limit)
        .limit(limit);

      const updatePromises = list.map(async (similar) => {
        const app = await AppModel.findOne({ icon: similar.icon });

        if (app) {
          return SimilarModel.updateOne(
            { _id: similar._id }, // Specify the document to update
            {
              $set: {
                id: similar._id,
                title: app.title,
                updated: app.updated,
                version: app.version,
                parentAppId: app._id,
              },
            }
          );
        }
      });

      await Promise.all(updatePromises);
    }

    res.status(200).json({ status: true });
  } catch (err) {
    console.error("Error updateSimilarData data:", err);
    res.status(500).json({
      status: false,
      error: err.message,
    });
  }
};


function GetListCategory() {
  return Object.keys(gplay.category);
}