//TODO make it so if user types string in age it notifys them to start over

$(document).ready(function() {
    console.log("hi");

    function previewFile() {
        var preview = document.querySelector('img');
        var file = document.querySelector('input[type=file]').files[0];
        var reader = new FileReader();

        reader.onloadend = function() {
            preview.src = reader.result;
        }

        if (file) {
            reader.readAsDataURL(file);
        } else {
            preview.src = "";
        }
    }

    previewFile();

    $("#signupbutton").on("click", function(event) {
        event.preventDefault();
        console.log("hi2");


        var username = $("#usernameInput").val();
        var name = $("#nameInput").val();
        var password = $("#passwordInput").val();
        var age = $("#ageInput").val();
        var bio = $("#bioInput").val();


        var newUser = {
            username: username,
            password: password,
            name: name,
            age: age,
            bio: bio
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
                .done(function(data) {
                    // Log the data we found
                    console.log(data);
                });

        } else {
            alert("passwords dont match");
            console.log("dont match");
        }

    })

});