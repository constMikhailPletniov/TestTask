const { Data } = require('../models');
const { config } = require('../config');
const path = require('path');
const fs = require('fs');
const util = require('util');

const readPromise = util.promisify(fs.readFile);

module.exports = {
    createData: async (req, res, next) => {
        try {
            await Data.create({
                ...req.body
            });
            res.status(config.CREATE).json('data are created');
        } catch (err) {
            next(err);
        }
    },
    getAllData: async (req, res, next) => {
        try {
            const data = await readPromise(path.join('data.json'))
            const jsonParse = JSON.parse(data);
            res.status(config.OK).json(jsonParse);
        } catch (err) {
            next(err);
        }
    }
}