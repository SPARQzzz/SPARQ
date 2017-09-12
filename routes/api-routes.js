var db = require("../models");

module.exports = function(app) {
    app.get("/api/usernames/", function(req, res) {
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

    app.post("/api/usernames", function(req, res) {
        console.log(req.body);
        db.User.create({
                username: req.body.username,
                password: req.body.password,
                name: req.body.name,
                age: req.body.age,
                bio: req.body.age
            })
            .then(function(dbPost) {
                res.json(dbPost);
            });
    });

}