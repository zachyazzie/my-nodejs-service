const { ObjectId } = require('mongodb');
const mongodb = require('../db/connect');

async function getContacts(req, res, next){
    const data = await mongodb.getDb().db("CSE341").collection('contacts').find(req.query.id ? ({"_id": ObjectId(req.query.id)}): '');
    data.toArray().then((contacts) => {
    res.setHeader('Content-Type', 'application/json');
    res.json(contacts);
    
    });
};

module.exports = {getContacts}
