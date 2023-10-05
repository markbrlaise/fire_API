const express = require('express');
const router = express.Router();
const fireController = require('../controllers/fireController');

router.post('/collect', fireController.collectFireInfo);
router.get('/provide', fireController.provideFireInfo);

module.exports = router;
