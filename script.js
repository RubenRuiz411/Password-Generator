// Assignment code here




var capitalLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; // uppercase letters
var lowercaseLetters = "abcefghijklmnopqrstuvwxyz";  // lowercase letter
var numbers = "0123456789" // numbers
var specialCharacters = "!@#$%^&*()_+~`|}{[]:;?></-=;" // special characters



//make 3 prompts


function generatePassword() {

var userChoiceHowMany = window.prompt("How many characters? 8-28");
var userChoiceNumbers = window.confirm("Numbers?");
var userChoiceSpecialCharacters = window.confirm("Special Characters?");
var userChoiceLowerCase = window.confirm("Lowercase?");
var userChoiceUpperCase = window.confirm("Uppercase?");

var chosenCharacters = "";

if ((userChoiceSpecialCharacters==true)) {
  chosenCharacters += specialCharacters;
} //if user chooses special characters, adds special characters to var chosenCharacters 
 if ((userChoiceNumbers==true)) {
  chosenCharacters += numbers;
} //if user chooses numbers, adds numbers s to var chosenCharacters 
 if ((userChoiceLowerCase==true)) {
  chosenCharacters += lowercaseLetters;
} //if user chooses lower case letters, adds lower case letters to var chosenCharacters 
 if ((userChoiceUpperCase==true)) {
  chosenCharacters += capitalLetters;
} //if user chooses upper case letters, adds upper case letters to var chosenCharacters 

randomLetter=chosenCharacters[Math.floor(Math.random() * chosenCharacters.length)]; // should choose a random character from the chosen characters (prompts) 
var i = ""
for (let i = 0; i < userChoiceHowMany; i++) {

  console.log(randomLetter = " is the password");
}


}




  



  //function to pull random letters from the chosenCharacters's to meet the users the specific needs from prompts


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



