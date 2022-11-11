// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  
  }


function generatePassword () {
    var passwordCharOptions = "";
    var generatedPassword = "";

// define the chars
var lowerchar = "abcdefghijklmnopqrstuvwxyz";
var upperchar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numberchar = "12356789";
var specialchar = "!#$%&'()*+,-./:;<=>?@[]\^_`{|}~";

// User choice password criteria 
var length = prompt("how long do you want the password to be?")
var lettersLower = confirm("do you want to include lowercase letters?")
var lettersUpper = confirm("do you want to include uppercase letters?")
var numbers = confirm("do you want to include numbers?")
var special = confirm("do you want to include special characters?")


// Ask user for their choice

if(lettersLower) {
    passwordCharOptions = passwordCharOptions + lowerchar
}

if (lettersUpper) {
    passwordCharOptions = passwordCharOptions + upperchar 
}

if(numbers) {
    passwordCharOptions = passwordCharOptions + numberchar
}

if (special) {
    passwordCharOptions = passwordCharOptions + specialchar
    
}

console.log(passwordCharOptions)

for (var i=0; i<length; i++) {
    var randomNumber = Math.floor (Math.random() * passwordCharOptions.length)
    
    generatedPassword = generatedPassword + passwordCharOptions.charAt(randomNumber)
    
}
return generatedPassword

}


generateBtn.addEventListener("click", writePassword);


  

/*GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page*/


