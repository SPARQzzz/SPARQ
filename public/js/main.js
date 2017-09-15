$(document).ready(function() {


  		var user = localStorage.getItem("user");
  		console.log(user);

      $.when(getLikers(user),getLikes(user),getStack()).done(function(){
        console.log("done loading");
        console.log(likes);
        console.log(likers);
        console.log(stack);

        var matches = returnMatches();
        //display matches
        console.log(matches);
        //display stack





      });
    //these will be filled once the ajax finished
    var likes = [];
    var likers = [];
    var stack = [];


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



//TODO: on click for matches, get matches
// otherwise find matches on click to swipe?
