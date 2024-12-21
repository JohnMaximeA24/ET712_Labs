// collect the components
const myForm = document.querySelector("#myForm");
const greetingspan = document.querySelector(".greeting p span");

// add submit event to form
myForm.addEventListener("submit", function(e) {
    e.preventDefault();

    // collect components when the submit button is clicked
    const username = document.querySelector("#username");
    const usernamevalue = username.value;

    // display a warning message if the username was not entered 
    if (usernamevalue.trim() === "") {
        alert("Please enter a username");
        return;
    }

    // display the username in the greeting paragraph
    greetingspan.textContent = usernamevalue;

    // clear the username text field
    username.value = "";
});

/**
 * Form validation
 */

// collect components
let passworderror = document.querySelector("#passworderror");
let btnlogin = document.querySelector(".btnlogin");
let passwordform = document.querySelector("#passwordform");
let passwordinput = document.querySelector("#password");

// disable the login button on load
window.addEventListener("load", function() {
    btnlogin.disabled = true; // Corrected 'True' to 'true'
});

// add input event to the password field
passwordinput.addEventListener("input", function() {
    // get the password value
    const passwordcount = passwordinput.value.length; // Get the length of the password

    // check if the password has more than 8 characters
    if (passwordcount < 8) {
        passworderror.textContent = "Password must be 8+ characters!";
        btnlogin.disabled = true; // Disable the button if password is invalid
    } else {
        passworderror.textContent = "";
        btnlogin.disabled = false; // Enable the button if password is valid
    }
});