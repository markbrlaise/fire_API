const express = require('express');
const router = express.Router();
const sendController = require('../controllers/sendController');

router.post('/sms', sendController.sendSMS);
router.post('/whatsapp', sendController.sendwhatsApp);

module.exports = router;
