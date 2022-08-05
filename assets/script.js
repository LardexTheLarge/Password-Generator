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

  //Split variables
  var lSplit = lowLetters.split("");
  var uSplit = upLetters.split("");
  var nSplit = num.split("");
  var speSplit = special.split("");

  console.log(lSplit);

  //prompt user for length
  var Length = prompt("PassWord needs to be more than 8 and less than 128:");
  console.log(Length);

  //prompt user to confirm
  // var lowCase = confirm("do you want Lower case letters");
  // var upperCase = confirm("do you want capital Letters");
  // var specialChar = confirm("do you want special characters");
  // var numbers = confirm("do you want numbers");

  // if (
  //   tagName !== "h1" &&
  //   tagName !== "h2" &&
  //   tagName !== "p" &&
  //   tagName !== "div"
  // ) {
  //   alert("please enter a valid tag");
  // } else {
  // }

  //gen the pasword using user input
  var randomPassword = "";
  for (var i = 0, p = lSplit.length; i < Length; i++) {
    randomPassword += lSplit[Math.floor(Math.random() * p)];
  }
  console.log(randomPassword);

  //return the generated password
  return randomPassword;
}
