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
  //variables
  var lowLetters = "abcdefghijklmnopqrstuvwxyz";
  var upLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var num = "0123456789";
  var special = "+-&|!(){}[]^~*?:=_#@<>/,.;";
  var all = lowLetters.concat(upLetters, num, special);

  //prompt user for length
  var passwordLength = prompt(
    "PassWord needs to be more than 8 and less than 128:"
  );
  console.log(passwordLength);

  //prompt user to confirm

  if (upLetters) {
    var upperCase = confirm("do you want capital Letters");
  } else {
    var lowCase = alert("Ur password will be made of lower case letters");
  }

  //gen the pasword using user input
  var randPass = "";
  for (var i = 0; i <= passwordLength; i++) {
    var randomletter = Math.floor(Math.random() * lowLetters.length);
    randPass += lowLetters.substring(randomletter, randomletter - 1);
  }
  console.log(randPass.length);

  //return the generated password
  return randPass;
}
