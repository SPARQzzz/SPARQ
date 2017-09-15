$("#loginbutton").on("click", function(event) {
  event.preventDefault();
	var username = $("#username").val();
	var password = $("#pwd").val();
	console.log(username);
	console.log(password);
  localStorage.setItem('user', username);

	$.get("/api/usernames/" + username, function(data) {
      console.log("username is ", data.username);
      if (password === data.password){
      	console.log("password correct");
        window.location.href = '/hotornot';
      }else{
      	alert("Incorrect password");
      }
    });

});