// userdetails.js
var check = function() {
  if (document.getElementById('password').value == document.getElementById('confirm_password').value && document.getElementById('password').value != null) {
    document.getElementById('message').style.color = 'green';
    document.getElementById('message').innerHTML = 'Matching';
  } else {
    document.getElementById('message').style.color = 'red';
    document.getElementById('message').innerHTML = 'Not Matching';
  }
}

if (localStorage.getItem('userdetails') === null) {  
    // if userdetails is null, that means it has not been loaded before. we not initialise userdetails object
    var userDetails = {firstName:"Walter", lastName:"Mitty", email:"wmitty@email.com",password:"password1", passwordConf:"password1"};
    // now we store the userdetails object as a localstorage object but localstore only stores text and userdetails is a javascript object
    // we convert a javascript object ot a string using JSON.stringify - we are being expedient!
    localStorage.setItem('userdetails',JSON.stringify(userDetails));
} else {
    // if localstorage variable userdetails is already created - load it to javascript oject. JSON.parse turns it back into an javascript object
    userDetails=JSON.parse(localStorage.getItem('userdetails'));
    document.getElementById("firstNameID").setAttribute('value',userDetails.firstName);
    document.getElementById("lastNameID").setAttribute('value',userDetails.lastName);
    document.getElementById("emailID").setAttribute('value',userDetails.email);
    document.getElementById("password").setAttribute('value',userDetails.password);
    document.getElementById("confirm_password").setAttribute('value',userDetails.passwordConf);
}

var userDetailsUpdate = document.getElementById('udetails');
// add a listener for update details if user decides to save updated details 
userDetailsUpdate.addEventListener("submit", UpdateUserDetails);

function UpdateUserDetails() {
    // if the user updates the user details - we update the userDetails javascript object
    var userDetails={};
    userDetails.firstName=document.getElementById('firstNameID').value;
    userDetails.lastName=document.getElementById('lastNameID').value;
    userDetails.email=document.getElementById('emailID').value;
    userDetails.password=document.getElementById('password').value;   
    userDetails.passwordConf=document.getElementById('confirm_password').value; 
  
  // finally we convert the javascript object to a string with JSON.stringify and save it to localstorage
    localStorage.setItem('userdetails',JSON.stringify(userDetails));

    event.preventDefault();
}
