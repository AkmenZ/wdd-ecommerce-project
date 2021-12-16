// custom.js 
// some basic functionality for login, checkout, userdetails
// amend and supplement in your project as you see fit

// set the checkout figure
if (localStorage.getItem('checkout') == null) {  
    localStorage.setItem('checkout',0);
}
var checkout=localStorage.getItem('checkout');
document.querySelector('#checkout').innerHTML=checkout;

// run to update login/
var logout = document.getElementById('loginlogout');
// add a listener for add to cart if such a button id is pressed
logout.addEventListener("click", Logout);

function Logout() {
    // if user is logged in them log them out and redirect to home page
    var loggedin=localStorage.getItem('loggedIn'); 
    if (loggedin==1) {
        localStorage.setItem('loggedIn',0);
        window.location.href = "home.html";
    } else {
        window.location.href = "login.html";
    }
}

// check if user is logged in or logged out..
checkLoginStatus()

function checkLoginStatus() {
    
    var loggedin=localStorage.getItem('loggedIn'); 
    var element = document.getElementById("userdetails");
    if (loggedin==1) {
        // change the text from Login to Logout
        document.querySelector('#loginlogout').innerHTML="Logout";
        element.classList.remove("d-none");        
        element.classList.add("d-show");      
    } else{
        // use add to hide the display of User Details
        element.classList.add("d-none");        
        element.classList.remove("d-show");
        document.querySelector('#loginlogout').innerHTML="Login"; 
        element = document.getElementById("loginlogout");
        element.setAttribute("href", "login.html");
    } 

}

function logInToCheckOutFirst(){
    
    let x = document.getElementById('checkOutBtn');
    let y = document.getElementById('loginlogout');
    
    if (y.innerHTML == "Login")
    {
        x.setAttribute("href","login.html");
    }
    else
    {
        x.setAttribute("href","checkout.html");
    }
}

function itemsBought(){
    
    const container = document.getElementById('checkOutContainer');
    var check = document.getElementById('getCvcNumber');
    var re = new RegExp("^([0-9]{3})$");
    
    if(re.test(check.value))

    //if(document.getElementById('getCvcNumber').value != "")
    {
    let total=localStorage.getItem('checkout');
    total = "";
    localStorage.setItem('checkout',total);
    document.querySelector('#checkout').innerHTML="";
        
    let form = document.getElementById('checkOutForm');
    form.remove();
        
    let mesg = document.createElement('div');
            mesg.setAttribute("class","alert alert-success");
            mesg.setAttribute("role","alert");
            container.appendChild(mesg);
    let h4 = document.createElement('h4');
            h4.setAttribute("class", "alert-heading");
            h4.innerHTML = "Thank You For Your Order";
            mesg.appendChild(h4);
            
    let p1 = document.createElement("p");
            p1.innerHTML = "Your Order Number Is: " + Math.floor(Math.random() * 1000);
            mesg.appendChild(p1);
    let p2 = document.createElement("p");
            p2.innerHTML = "Please Check Your Email!";
            mesg.appendChild(p2);
    }
}



