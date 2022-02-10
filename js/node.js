const loginButton = document.getElementById('login')
loginButton.addEventListener('click', function () {
    const userEmail = document.getElementById('email').value;
    const userPass = document.getElementById('pass').value;
    if (userEmail == 'sadiasultana0303@gmail.com' && userPass == "sannysadia") {
        window.location.href = "../bank.html";
    }
})