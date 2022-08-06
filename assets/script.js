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

  //prompt user for length
  var Length = prompt("PassWord needs to be more than 8 and less than 128:");

  if (Length < 8) {
    alert("Restart Webpage Password is too short");
    window.location.reload();
  } else if (Length > 128) {
    alert("Restarting Webpage Password is too long");
    window.location.reload();
  } else {
    //prompt user
    var lowCase = confirm("do you want Lower case letters");
    var upperCase = confirm("do you want capital Letters");
    var specialChar = confirm("do you want special characters");
    var numbers = confirm("do you want numbers");
    var passwordOptionsTxt = "";

    lowCase === true ? (passwordOptionsTxt += lowLetters) : "";
    upperCase === true ? (passwordOptionsTxt += upLetters) : "";
    specialChar === true ? (passwordOptionsTxt += special) : "";
    numbers === true ? (passwordOptionsTxt += num) : "";
    var passhold = passwordOptionsTxt.split("");

    console.log(passhold);
  }

  //generate the password using user input
  var randomPassword = "";
  for (var i = 0, p = passhold.length; i < Length; i++) {
    randomPassword += passhold[Math.floor(Math.random() * p)];
  }

  console.log(randomPassword);
  console.log(randomPassword.length);

  //return the generated password
  return randomPassword;
}
