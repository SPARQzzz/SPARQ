var Person = {
  id: "90090",
  likedStack: [],
  likersStack: [],
  username:"",
  pics: [],
  bio:"",
  age:10,
  checkLiked: function(candidate) {
    if(this.likedStack.indexOf(candidate) > -1){
      console.log("user in stack");
    } else{
      console.log("user not there");
    }
  }
  checkLikers: function(candidate) {
    if(this.likersStack.indexOf(candidate) > -1){
      console.log("user in stack");
    } else{
      console.log("user not there");
    }
  }
  checkBoth: function(candidate) {
    if(this.likersStack.indexOf(candidate) > -1 && this.likedStack.indexOf(candidate)){
      console.log("users matched");
    } else{
      console.log("user not matched");
    }
  }
};

var BriceRandolph = Object.create(Person);
BriceRandolph.username="Brice";
BriceRandolph.bio = "heyyyyguyyyys";
BriceRandolph.age = 24;
BriceRandolph.likedStack.push("DopeDoperson");

var BriceRandolph2 = Object.create(Person);
BriceRandolph2.username="Brice2";
BriceRandolph2.bio = "heyyyyguyyyys";
BriceRandolph2.age = 24;

//if right swipe - push id to likedStack
BriceRandolph2.likedStack.push("DopeDoperson");

var DopeDoperson = Object.create(Person);
DopeDoperson.username="Dope Dopersone";
DopeDoperson.bio = "heyyyyguyyyys!";
DopeDoperson.age = 30;


var people = [];

people.push(BriceRandolph);
people.push(DopeDoperson);
BriceRandolph2.checkLiked("DopeDoperson");
