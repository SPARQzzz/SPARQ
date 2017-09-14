console.log("Test");
//need username
var likes = [];
var likers = [];
getLikers();
getLikes();
function getLikers() {
  $.get("/api/getLikers/brice", function(data) {
    likes = data;
    console.log(0);
  });
}

function getLikes() {
  $.get("/api/getLikes/brice", function(data) {
    likes = data;
    console.log(1);
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

console.log(2);
