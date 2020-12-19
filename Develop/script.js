// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = "password";
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Pseudocode:

// Prompt the user how many characters they want in their password (8-128)

// Confirm if the user wants to use upper case letters

// Confirm if the user wants to use lowercase letters

// Confirm if the user wants to use numbers

// Confirm if the user wants to use special characters

// Gather user confirms into a boolean array

// Establish arrays for each character type

// Start a loop that continues for as many characters as prompted by user

// Have the loop randomly choose between a user confirmed type of character for each step

// Have the loop assign a random numerical value within appropriate range to each type as it loops

// translate array of password strings to un-separated value



// make an upperCase array
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

// make a lowerCase array
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

// make a numerCase array
var numerCase = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]

// make a specCase array
var specCase = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", ".", ","]


// Make a random number generator for selecting characters within each array
function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
// make a random number generator function for selecting passType array indexes
function randomPassType() {
    return randomInteger(0, 4);
}

// make a boolean array of types (upper, lower, numer, or special) of characters user specifies
var passTypes = []
// how many characters user specified for password length (user prompt) - variable is sent to while loop "mainPassword"
var chooseLength = 0
function askUser() {
    chooseLength = prompt("How many characters would you like in your password? Choose from 8 to 128");
    if ((chooseLength < 8) || (chooseLength > 128)) {
        alert("please choose between 8 and 128 characters!")
        askUser();
    }
}

// make an array of types of characters user specifies (boolean)
var passTypes = []

// call funtion to begin user prompts
askUser();

// call function to  
askCase();

function askCase() {
    passTypes = [];
    // confirm if upper case letters should be included
    var useUpper = confirm("Would you like to include upper case letters?")
    if (useUpper === true) {
        passTypes.push(true)
    } else {
        passTypes.push(false)
    }

    // confirm if lower case letters should be included
    var useLower = confirm("Would you like to include lower case letters?")
    if (useLower === true) {
        passTypes.push(true)
    } else {
        passTypes.push(false)
    }

    // confirm if numerals should be included
    var useNumer = confirm("Would you like to include numerals?")
    if (useNumer === true) {
        passTypes.push(true)
    } else {
        passTypes.push(false)
    }

    // confirm if special characters should be included
    var useSpec = confirm("Would you like to include special characters?")
    if (useSpec === true) {
        passTypes.push(true)
    } else {
        passTypes.push(false)
    }
}

// this is to make sure the user chooses at least one type - at the moment cannot seem to return with a clean array
while (!passTypes.includes(true)) {
    alert("You need select at least one kind of character!");
    askCase();
}

// start of the main loop that reflects number of characters in password - 

// need a loop or function that generates a random number between 0 and 3 then check if that index is false and tries again until the main loop completes

var mainPassword = []

while (mainPassword.length < chooseLength) {

    var passTypeResult = randomPassType()

    // Cannot get an evaluation made that says to run function again if not true
    if (passTypes[passTypeResult] === true) {

        //  below works to push, or populate the mainPassword array
        if (passTypeResult === 0) {
            mainPassword.push(upperCase[randomInteger(0, upperCase.length)])
        } else if
            (passTypeResult === 1) {
            mainPassword.push(lowerCase[randomInteger(0, lowerCase.length)])
        } else if
            (passTypeResult === 2) {
            mainPassword.push(numerCase[randomInteger(0, numerCase.length)])
        } else {
            mainPassword.push(specCase[randomInteger(0, specCase.length)])
        }
    }
}

// return concatenated password from array with no separators
var finalPassword = mainPassword.join('');

// make alert to display final password
alert("Password is: " + finalPassword)