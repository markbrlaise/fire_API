const express = require('express');
const router = express.Router();
const socialController = require('../controllers/socialController');


router.get('/social-media-data', socialController.mineSocial);
router.get('nasa-data', )

module.exports = router;
