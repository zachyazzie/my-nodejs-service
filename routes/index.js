const express = require('express'); //import express

// 1.
const router  = express.Router(); 
// 2.
const indexController = require('../controllers'); 
// 3.
router.get('/index', indexController.newIndex); 
// 4. 
module.exports = router; // export to use in server.js
