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

