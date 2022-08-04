// Assignment Code
//leave alone
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
//leave alone
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  //prompt user for length
  var mkPass = "this word";

  //prompt user to confirm

  //gen the pasword using user input

  //return the generated password
  return mkPass;
}
