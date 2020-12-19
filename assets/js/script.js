// Assignment code here
function generatePassword() {
  
  //declare necessary variables
    //variable for storing how many characters long the pasword will be
      let passwordLength;
    //variables for determining what types of characters will be used and storing those characters 
    //as a resource to generate the password
      let lc;
      let uc;
      let num;
      let sc;
      let characters="";
    //variable for storing the final password
      let finalPassword = "";
    //variable for determining if password has at least one of each kind of character
      let passwordValid;
  
  //request desired password length and store result
  do {
    passwordLength = window.prompt("How long do you want your password be? \nPick a length between 8 and 128 characters.");
    //convert length into an integer
    passwordLength = parseInt(passwordLength);
    //check to make sure a valid number was chosen and warn user if it was not.
    if (Number.isNaN(passwordLength) === true || passwordLength < 8 || passwordLength > 128) {
      window.alert("Invalid entry. Please try again.");
    } 
  //Check to make sure a valid number was chosen and redeploy prompt if it was not.
  } while (Number.isNaN(passwordLength) === true || passwordLength < 8 || passwordLength > 128);
  
  //find out what types characters to include as options for password and store them in the characters variable
  do {
    lc = window.confirm("Include lowercase letters in your password? \n(OK for yes. Cancel for no.)");
    uc = window.confirm("Include uppercase letters in your password? \n(OK for yes. Cancel for no.)");
    num = window.confirm("Include numbers in your password? \n(OK for yes. Cancel for no.)");
    sc = window.confirm("Include special characters (!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~) in your password? \n(OK for yes. Cancel for no.)");
    //check to make sure at least one character type was chosen and warn user if it was not.
    if (lc === false && uc === false && num === false && sc === false) {
      window.alert("You must choose at least one of lowercase, uppercase, numbers or special characters. Please try again.");
    }
  //check to make sure at least one character type was chosen. If not redeploy the confirms until at least one is.
  } while (lc === false && uc === false && num === false && sc === false);

  //Check to see what charcter types were chosen and add them to the characters variable
  if (lc===true) {
    characters += "abdefghijklmnopqrstuvwxyz";
  } 
  if (uc===true) {
    characters += "ABCEDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if (num === true) {
    characters += "0123456789";
  }
  if (sc === true) {
    characters += "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
  }
  do {
    //randomly generate a character and add it to the password until the password is the desired length.
    for (var i = 0; i <passwordLength; i++) {
      finalPassword = finalPassword + characters.charAt(Math.floor(Math.random()*characters.length));
    } 
    //Check to see that password has at least one of each chosen character type. If not reset the finalPassword variable
    if (
           lc  === true && finalPassword.match(/[a-z]/) === null 
        || uc  === true && finalPassword.match(/[A-Z]/) === null 
        || num === true && finalPassword.match(/[0-9]/) === null
        || sc  === true && finalPassword.match(/[-!$%^&*()\\_+|~=`{}\[\]:";'<>?,.\/]/) === null
       ) {
      passwordValid = false;
      finalPassword="";
    } else {
      passwordValid=true;
    }
  // If password does not have one of each chosen character type regenerate the password
  } while (passwordValid === false);

  //return the password.
  return finalPassword;

}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);