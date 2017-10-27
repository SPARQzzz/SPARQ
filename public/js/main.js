$(document).ready(function() {


    var user = localStorage.getItem("user");
    console.log(user);

    //*filled once the ajax finished
    var top = {};
    var UserInfo = {};
    var likes = [];
    var likers = [];
    var stack = [];

    $("#likebtn").on("click", function(event) {
        top = stack[0];
        event.preventDefault();
        console.log("like button clicked");
        var newLike = {
            username: user,
            liked: top.username
        }
        console.log(newLike);

        $.post("/api/like", newLike)
            .then(function(data) {
                console.log(data);
            }).fail(function(Error) {
                console.log(Error);
            });


        var matches = returnMatches();
        var matches = returnMatches();
        var count = 0;

        console.log(matches);
        for (i = 0; i < matches.length; i++) {
            if (matches[i] === top.username) {
                count++;
            }
        }
        if (count > 0) {
            alert("It's a match!");
        }
        console.log(matches);
        console.log(stack);
        $("#user").text("");
        $("#user2").text("");
        stack.shift();
        console.log(stack);
        displayBio();
    });

    $("#dislikebtn").on("click", function(event) {
        top = stack[0];
        event.preventDefault();
        stack.push(top);
        stack.shift();
        console.log(stack);
        $("#user").text("");
        $("#user2").text("");
        displayBio();

    })


    // runs once the database query returns
    $.when(getLikers(user), getLikes(user), getStack(), getUserInfo(user)).done(function() {
        console.log("done loading");
        console.log(likes);
        console.log(likers);
        console.log(stack);
        var stackOppSex = stack;
        var matches = returnMatches();
        displayBio();
        //display matches
        console.log(matches);
        //display stack
        top = stack[0];
    });


    function displayBio() {

        var name = stack[0].name;

        name = name.charAt(0).toUpperCase() + name.slice(1);
        $("#user").append("<img id='userpic' height='250px' src='/images/" + stack[0].username + ".jpg'/>");
        $("#user").append("<br>");
        $("#user2").append("<h2 id='bioname'>" + name);
        $("#user2").append("<h3 id='bioage'>" + stack[0].age);
        $("#user2").append("<p id ='bio'>" + stack[0].bio);
    }

    function getStack() {

        return $.get("/api/getStack", function(data) {
            stack = data;
            console.log('gotStack');
        });
    }

    function getLikers(user) {
        return $.get("/api/getLikers/" + user, function(data) {
            likers = data;
            console.log('gotLikers');
        });
    }

    function getLikes(user) {
        return $.get("/api/getLikes/" + user, function(data) {
            likes = data;
            console.log('gotLikes');
        });
    }

    function getUserInfo(user) {
        return $.get("/api/getUserInfo/" + user, function(data) {
            UserInfo = data;
            console.log('gotUserInfo');
            console.log(UserInfo);
        });
    }

    //returns an array of usernames that match the given user
    // requires arrays (likes) and (likers) to be filled.
    function returnMatches() {
        var matches = [];
        for (var i = 0; i < likes.length; i++) {
            for (var j = 0; j < likers.length; j++) {
                if (likes[i].liked === likers[j].username) {

                    matches.push(likes[i].liked);
                }
            }
        }
        return matches;
    }

});
