// Assignment code here




var capitalLetters = ["A","B","C","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]; // uppercase letters
var lowercaseLetters = ["a","b","c","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];  // lowercase letters
var numbers = ["0","1","2","3","4","5","6","7","8","9"] // numbers
var specialCharacters = ["!","@","#","$","%","^","&","*","(",")","_","+","~","`","|","}","{","[","]",":",";","?",">","<","/","-","=",";"] // special characters



//make 3 prompts




var userChoiceHowMany = window.prompt("How many characters? 8-28");
var userChoiceNumbers = window.confirm("Numbers?");
var userChoiceSpecialCharacters = window.confirm("Special Characters?");
var userChoiceLowerCase = window.confirm("Lowercase?");
var userChoiceUpperCase = window.confirm("Uppercase?");

var chosenCharacters = "";

if ((userChoiceSpecialCharacters==true)) {
  chosenCharacters += specialCharacters;
} //if user chooses special characters, adds special characters to var chosenCharacters 
else if ((userChoiceNumbers==true)) {
  chosenCharacters += numbers;
} //if user chooses numbers, adds numbers s to var chosenCharacters 
else if ((userChoiceLowerCase==true)) {
  chosenCharacters += lowercaseLetters;
} //if user chooses lower case letters, adds lower case letters to var chosenCharacters 
else if ((userChoiceUpperCase==true)) {
  chosenCharacters += capitalLetters;
} //if user chooses upper case letters, adds upper case letters to var chosenCharacters 

randomLetter=chosenCharacters[Math.floor(Math.random() * chosenCharacters.length)]; // should choose a random character from the chosen characters (prompts) 

console.log(randomLetter + " is the random letter.") // console logs a random character from the chosencharacters




function generatePassword() {
  

  

  console.log(capitalLetters[0]) // button clicked


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



