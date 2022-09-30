const express = require('express');
const router = express.Router();

const contactsController = require('../controllers/contacts');

router.get('/', contactsController.getAllContacts);

router.get('/:postId', contactsController.getOneContact);

router.post('/', contactsController.createContact);

router.put('/:postId', contactsController.updateContact);

router.delete('/:postId', contactsController.deleteContact);

module.exports = router;
