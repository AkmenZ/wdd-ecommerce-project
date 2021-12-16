var loginStatus = document.getElementById('user-login');
// add a listener for add to cart if such a button id is pressed
loginStatus.addEventListener("submit", loginUser);

function loginUser() {

    // wait for submit button to be clicked on login form - 
    // this code only invoked if login form submit button clicked

    var email = document.getElementById('emailAddressID').value;
    var password= document.getElementById('passwordID').value;
    if (email=="wmitty@email.com" && password=="password1")  {   
        // successful login, user redirected to shop.html
        localStorage.setItem('loggedIn',1);    
        window.location.href = "shop.html";  // redirect to shop page
    }
    else {
        // login unsuccessful, error message appears
        localStorage.setItem('loggedIn',0);
        var element = document.getElementById("loginerror");
        element.classList.remove("d-none");
        element.classList.remove("d-block");
    }
    event.preventDefault();
}



function loginLogoutUpdate() {
    
    // wait for loginlogout button to be clicked - a click here means the user has chosen to logout
    var loggedin=localStorage.getItem('loggedIn'); 
    if (loggedin==0) {
        // set the flag so that user is not logged in
        localStorage.setItem('loggedIn',1);
        window.location.href = "home.html";
    }  else {
     //   localStorage.setItem('loggedIn',1);
        window.location.href = "login.html";
        
    }
}


