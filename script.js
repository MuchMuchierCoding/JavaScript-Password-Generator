var passwordButton = document.getElementsByClassName('btn');
console.log(passwordButton)

for (var i= 0; i < passwordButton.userPrompt; "Do you want to include lower letters?") {
    var button = passwordButton[i]
    button.addeventlistener('click', function(event) {
        var buttonClicked = event.currentTarget
        buttonClicked.
    } 
}
function passwordButton(event) {
    event.currentTarget.userPrompt(
        "Do you want to include lower letters?"
    );
}


Code for password generator






/*

//how to use params and definitions to create a password

//how long the password is = params of the user {12}
//create a forloop that picks a char at random and put the random chars together 12 times



// Assignment Code

//put all code in here so it begins at click
function generatePassword() {

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


    //how long to make password
    var length = prompt("how long do you want the password to be")
    //define the chars
    var lowerchar = prompt("abcdefghijklmnopqrstuvwxyz");
    var upperchar = prompt("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
    var numberchar = prompt("12356789");
    var specialchar = prompt("!#$%&'()*+,-./:;<=>?@[]\^_`{|}~");


    var generateBtn = document.querySelector("#generate");

    generateBtn.addEventListener("click", e => {
        ;
    });
    
}
    

    //what type of chars; letters lower, letters upper, numbers, special 
    var lettersLower = confirm("do you want to unclude lower letters")
    var lettersUpper = confirm("do you want to include upper letters")
    var numbers = confirm("do you want to include numbers?")
    var special = confirm("do you want to include special characters?")

    // Ask user for their choice
    var userChoice = window.prompt("Enter Yes or No:");

    if (!userChoice) {
        return;
    }
    

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

}

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


