document.getElementById('loginForm2').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar el envío del formulario
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMsg = document.getElementById('errorMsg');

    if (!username || !password) {
        errorMsg.textContent = 'Please enter both username and password';
    } else if (username === 'admin' && password === 'password123') {
        errorMsg.textContent = 'Login successful!';
        errorMsg.style.color = 'green';

        // // Redirect to home page
        // window.location.href = 'admin.html';
        window.location.href = 'clock.html';

        // setTimeout(function() {
        //     window.location.href = 'admin.html'; // Redirige a admin.html
        // }, 1000);
    } else if (username === 'user' && password === 'password123') {
        errorMsg.textContent = 'Login successful!';
        errorMsg.style.color = 'green';

        // // Redirect to home page
        // window.location.href = 'home.html';

        // setTimeout(function() {
        //     window.location.href = 'user.html'; // Redirige a admin.html
        // }, 1000);

    } else {
        errorMsg.textContent = 'Invalid username or password';
    }
    console.log(event)
});

