var path = require("path");
var formidable = require('formidable');

module.exports = function(app) {

    app.get("/login", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/login.html"));
    });

    app.get("/signup", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/signup.html"));
    });

       app.get("/picture", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/picture.html"));
    });

   app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });

   app.get("/hotornot", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/hotornot.html"));
    });

};