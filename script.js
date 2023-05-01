// Assignment code here




var capitalLetters = ["A","B","C","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]; // uppercase letters
var lowercaseLetters = ["a","b","c","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];  // lowercase letters
var numbers = ["0","1","2","3","4","5","6","7","8","9"] // numbers
var specialCharacters = ["!","@","#","$","%","^","&","*","(",")","_","+","~","`","|","}","{","[","]",":",";","?",">","<","/","-","=",";"] // special characters

var chosenCharacters = "";


if (userChoiceSpecialCharacters=true) {
chosenCharacters += specialCharacters
}

if (userChoiceNumbers=true) {
chosenCharacters += numbers
}
if (userChoiceLowerCase=true) {
  chosenCharacters += lowercaseLetters
  }
   if (userChoiceUpperCase=true) {
    chosenCharacters += capitalLetters
    }


//make 3 prompts

randomLetter = chosenCharacters[Math.floor(Math.random() * chosenCharacters.length)];

console.log(randomLetter + " is the random letter.")

var userChoiceHowMany = window.prompt("How many characters? 8-28");
var userChoiceNumbers = window.confirm("Numbers?");
var userChoiceSpecialCharacters = window.confirm("Special Characters?");
var userChoiceLowerCase = window.confirm("Lowercase?");
var userChoiceUpperCase = window.confirm("Uppercase?");

function generatePassword() {
  

  



  }
  // if userChoiceNumbers = confirmed then generate a password the specified length and a number
  // if userChoiceSpecialCharacters = confirmed then generate a passdword with special characters
  // if userChoiceLowerCase = confirmed then generate a passdword with Lower Case letters
  // if userChoiceUpperCase = confirmed then generate a passdword with Upper Case letters 
 // if userChoiceHowMany = a number then generate a password the length of choice



  



  console.log(capitalLetters[0]) // button clicked

  //prompt for how many letters
  //prompt if i need upper case letters
  //prompt if i need lower case letters
  //function to pull random letters from the var's to meet the users the specific needs from prompts


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




for (let i=0; i < userChoiceHowMany; i++)
  console.log (randomLetter[2])