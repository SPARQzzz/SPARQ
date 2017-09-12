$("#loginbutton").on("click", function(event) {
	var username = $("#username").val();
	var password = $("#pwd").val();
	console.log(username);
	console.log(password);

	$.get("/api/usernames/" + username, function(data) {
      console.log("username is ", data.username);
      if (password === data.password){
      	console.log("password correct");
      }else{
      	alert("Incorrect password");
      }
    });

});