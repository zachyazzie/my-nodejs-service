const routes = require('express').Router();

routes.get('/', (req, res) => {
    res.send('Clark Kent');
});

module.exports = routes;
