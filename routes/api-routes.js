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

    app.post("/api/new", function(req, res) {
        console.log(req.body);
        db.User.create({
                username: req.body.username,
                password: req.body.password,
                name: req.body.name,
                age: req.body.age,
                bio: req.body.bio,
                gender: req.body.gender
            })
            .then(function(dbUsers) {
                res.json(dbUsers);
            });
    });

    //add like to table
    app.post("/api/like", function(req, res) {
        //console.log(req.body);
        db.Like.create({
                username: req.body.username,
                liked: req.body.liked
            })
            .then(function(dbLikes) {
                res.json(dbLikes);
            });
    });



    // 1) get users that like a given user
    // returns: [{"username":"damian"},{"username":"damian"}]

    // 2) get a given users likes
    //returns: [{"liked":"damian"},{"liked":"damian"},{"liked":"derek"}]

    // 3) get raw stack of users from database


    app.get("/api/getLikes/:username?", function(req, res) {
        db.Like.findAll({
                attributes: ['liked'],
                where: {
                    username: req.params.username
                }
            })
            .then(function(dblike) {
                res.json(dblike);
            });
    });

    app.get("/api/getLikers/:username?", function(req, res) {
        db.Like.findAll({
                attributes: ['username'],
                where: {
                  liked: req.params.username
                }
            })
            .then(function(dblike) {
                res.json(dblike);
            });
    });

    app.get("/api/getStack", function(req, res) {
        db.User.findAll({
                attributes: ['username','name','age','bio','gender']


            })
            .then(function(dbUser) {
                res.json(dbUser);
            });
    });

    app.get("/api/getUserInfo/:username?", function(req, res) {
        db.User.findAll({
                attributes: ['username','name','age','bio','gender'],
                where: {
                  username: req.params.username
                }

            })
            .then(function(dblike) {
                res.json(dblike);
            });
    });



}
