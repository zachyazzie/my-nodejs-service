const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contacts')


router.get('/', contactController.getContacts)


module.exports = router;