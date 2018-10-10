var express = require("express");
var ALLOWED_IPS = [
    "::1"
];
var api = express.Router();
api.use(function(req, res, next) {
    var userIsAllowed = ALLOWED_IPS.indexOf(req.ip) !== -1;
    if (!userIsAllowed) {
        res.status(401).send("Not authorized!");
    } else {
        next();
    }
});
api.get("/users", function(req, res) { 
    console.log("Ascari hay");
    res.end(""+ res.url);
});
api.post("/user", function(req, res) {  });
api.get("/messages", function(req, res) { /* ... */ });
api.post("/message", function(req, res) { /* ... */ });
module.exports = api;