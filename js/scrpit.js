$(document).ready(function() {
    // Registration
    $('#registrationForm').submit(function(event) {
        event.preventDefault();
        const userData = {
            name: $('#name').val(),
            email: $('#email').val(),
            password: $('#password').val()
        };

        $.post('/register', userData, function(response) {
            alert(response);
        });
    });

    // Login
    $('#loginForm').submit(function(event) {
        event.preventDefault();
        const loginData = {
            email: $('#loginEmail').val(),
            password: $('#loginPassword').val()
        };

        $.post('/login', loginData, function(response) {
            alert(response);
        });
    });
});