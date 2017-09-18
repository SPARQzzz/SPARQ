$(document).ready(function() {


  		var user = localStorage.getItem("user");
  		console.log(user);

      //these will be filled once the ajax finished
      var top = {};
      var UserInfo = {};
      var likes = [];
      var likers = [];
      var stack = [];

      $("#likebtn").on("click", function(event) {
          event.preventDefault();
          console.log("like button clicked");
          var newLike = {
            username: user,
            liked: top.username
          }
          console.log(newLike);

            $.post("/api/like", newLike)
          // On success, run the following code
            .then(function(data) {
          // Log the data we posted
            console.log(data);
              }).fail(function(Error) {
                console.log(Error);
              });


      });


      // function runs once the database query returns
      $.when(getLikers(user),getLikes(user),getStack(),getUserInfo(user)).done(function(){
        console.log("done loading");
        console.log(likes);
        console.log(likers);
        console.log(stack);
        var stackOppSex = stack
        var matches = returnMatches();
        //display matches
        console.log(matches);
        console.log(UserInfo);
        //display stack
        top = stack[0];


      });





    function getStack() {

      return $.get("/api/getStack", function(data) {
        stack = data;
        console.log('gotStack');
      });
    }

    function getLikers(user) {
      return $.get("/api/getLikers/"+user, function(data) {
        likers = data;
        console.log('gotLikers');
      });
    }

    function getLikes(user) {
      return $.get("/api/getLikes/"+user, function(data) {
        likes = data;
        console.log('gotLikes');
      });
    }

    function getUserInfo(user) {
      return $.get("/api/getUserInfo/"+user, function(data) {
        UserInfo = data;
        console.log('gotUserInfo');
        console.log(UserInfo);
      });
    }

    //returns an array of usernames that match the given user
    // requires arrays (likes) and (likers) to be filled.
    function returnMatches(){
      var matches = [];
      for (var i = 0; i < likes.length; i++) {
        for (var j = 0; j < likers.length; j++) {
          if(likes[i].liked === likers[j].username){

            matches.push(likes[i].liked);
          }
        }
      }
      return matches;
    }

});
