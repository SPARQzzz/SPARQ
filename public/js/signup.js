$(document).ready(function() {

    console.log("hi");

    $("#signupbutton").on("click", function(event) {
        event.preventDefault();
        console.log("hi2");

        var count = 0;

        var username = $("#usernameInput").val();
        var name = $("#nameInput").val();
        var password = $("#passwordInput").val();
        var age = $("#ageInput").val();
        var bio = $("#bioInput").val();
        var gender = $("#custom-select").val();

        $.get("/api/usernames/", function(data) {
            for (i = 0; i < data.length; i++) {
                if (username === data[i].username) {
                    count++;
                }
            }
            if (count === 0) {
                localStorage.setItem('user', username);

                if (isNaN(age) == false) {


                    var newUser = {
                        username: username,
                        password: password,
                        name: name,
                        age: age,
                        bio: bio,
                        gender: gender
                    }

                    function sayHi() {
                        console.log("hi");
                    };


                    var password = $("#passwordInput").val();
                    var password1 = $("#password1").val();

                    // console.log(password);

                    if (password === password1) {
                        console.log("passwords match");
                        $.post("/api/new", newUser)
                            // On success, run the following code
                            .then(function(data) {
                                // Log the data we found
                                console.log(data);
                                window.location.href = '/picture';
                            }).fail(function(Error) {
                                console.log(Error);
                            });

                    } else {
                        alert("passwords dont match");
                        console.log("dont match");
                    }

                } else {
                    alert("Age must be a number");
                }

            } else {
                alert("Username taken. Try a new one")
            }


        });

    });


});
