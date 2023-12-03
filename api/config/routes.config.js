const express = require('express');
const phoneController = require('../controllers/phones.controller');
const router = express.Router();

router.get('/phones', phoneController.getAllPhones);
router.get('/phones/:id', phoneController.getPhoneDetails);

module.exports = router;