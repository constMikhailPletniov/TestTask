const express = require('express');

const router = new express.Router();

const { dataController } = require('../controllers');

router.post('/data', dataController.createData);

router.get('/', dataController.getAllData);

module.exports = router;