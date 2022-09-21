const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contacts')


router.get('/contacts', contactController.getAllContacts)


module.exports = router;