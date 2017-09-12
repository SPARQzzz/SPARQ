$("#signupbutton").on("click", function(event) {

	 var newUser = {
      username: usernameInput.val().trim(),
      password: passwordInput.val().trim(),
      name: nameInput.val().trim(),
      age: ageInput.val().trim(),
      bio: bioInput.val().trim()
    };

     function submitPost(Post) {
    $.post("/api/usernames/", newUser, function() {
    	console.log(newUser);
    });
  }

})