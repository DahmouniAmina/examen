var express = require('express');
const { json } = require('express/lib/response');
var router = express.Router();

/* GET movies listing. */
const moviesJson =  require("./movies_reduit.json"); // path of your json file;
router.get('/', function (req, res, next) {
    console.log(moviesJson.type)
    for (var car of moviesJson) 
    {
        res.send(moviesJson)
    }
});
module.exports = router;