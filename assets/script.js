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
  var allSplit1 = lowLetters.concat(upLetters, num, special).split("");

  var allSplit2 = {
    low: lSplit,
    up: uSplit,
    number: nSplit,
    spec: speSplit,
  };

  var allSplit3 = [lSplit, uSplit, nSplit, speSplit];

  //prompt user for length
  var Length = prompt("PassWord needs to be more than 8 and less than 128:");

  if (Length < 8) {
    alert("Restart Webpage Password is too short");
    window.location.reload();
  } else if (Length > 128) {
    alert("Restarting Webpage Password is too long");
    window.location.reload();
  } else {
    //prompt user to confirm
    var promptArray = [
      (lowCase = confirm("do you want Lower case letters")),
      (upperCase = confirm("do you want capital Letters")),
      (specialChar = confirm("do you want special characters")),
      (numbers = confirm("do you want numbers")),
    ];

    // iterate through each prompt
    for (var i = 0; i < promptArray.length; i++) {
      if (promptArray[i] === true) {
      }
    }
  }

  //generate the password using user input
  var randomPassword = "";
  for (var i = 0, p = lSplit.length; i < Length; i++) {
    randomPassword += lSplit[Math.floor(Math.random() * p)];
  }

  console.log(randomPassword);
  console.log(randomPassword.length);

  //return the generated password
  return randomPassword;
}
