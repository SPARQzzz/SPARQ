$(document).ready(function() {
    //need username
    var likes = [];
    var likers = [];
    var stack = [];
    getLikers();
    getLikes();
    getStack();

    function getStack() {
      $.get("/api/getStack", function(data) {
        stack = data;
        console.log('gotStack');
      });
    }

    function getLikers() {
      $.get("/api/getLikers/brice", function(data) {
        likes = data;
        console.log('gotLikers');
      });
    }

    function getLikes() {
      $.get("/api/getLikes/brice", function(data) {
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

    console.log('endofmain.js');
});



//TODO: on click for matches, get matches
// otherwise find matches on click to swipe?
