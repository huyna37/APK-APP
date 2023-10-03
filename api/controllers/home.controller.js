const Base = require('./base.controller');
const Service = require('../services/home.service')

exports.getAll = async (req, res) => {
    try {
        const result = await Service.GetAll(req);
        res.status(200).json({
            status: true,
            result
        });
    } catch (error) {
        console.error("Error getAll data:", error);
        res.status(500).json({
            status: false,
            error: "Internal server error"
        });
    }
};

exports.getById = async (req, res) => {
    try {
        const result = await Service.GetById(req.params);
        res.status(200).json({
            status: true,
            result
        });
    } catch (error) {
        console.error("Error getById data:", error);
        res.status(500).json({
            status: false,
            error: "Internal server error"
        });
    }
};