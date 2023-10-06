const express = require('express');
const router = express.Router();
const socialController = require('../controllers/socialController');
const nasaController = require('../controllers/nasaController');

router.get('/social-media-data', socialController.mineSocial);
router.get('nasa-data', nasaController.validatewithNASAData);

module.exports = router;
