var db = require("../models");

module.exports = function(app) {
    app.get("/api/usernames", function(req, res) {
        db.User.findAll({})
            .then(function(dbUser) {
                res.json(dbUser);
            });
    });

     app.get("/api/usernames/:username?", function(req, res) {
        db.User.findOne({
                where: {
                    username: req.params.username
                }
            })
            .then(function(dbUsers) {
                res.json(dbUsers);
            });
    });
}