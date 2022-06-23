// Assignment Code

var charSets = {
  special: "!@#$%^&*()_-+=?{}[]:;",
  numeric: "0123456789",
  lower: "abcdefghijklmnopqrstuvwxyz",
  upper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
}

var range = {
  minLength: 8,
  maxLength: 128
}


var Random = function(min, max){
  return Math.floor(Math.random() * (max - min) + min);
}

var generatePass = function() {
  var length = window.prompt("How many character would you like your password to be?\n Enter a number of digits between " + range.minLength + "-" + range.maxLength + ".");

  if (length === null)
  return "";

  length = parseInt(length);

  if(Number.isNaN(length) || length < range.minLength || length > range.maxLength) {
    window.alert("Please enter a number between " + range.minLength + "-" + range.maxLength + ".");
    return generatePass();
  }

  var isYes = false;
  
  var isSpecial = window.prompt("Do you want to include symbols/special characters?\n \"Y\" or \"N\"");
  if (isSpecial === null)
    return "";
  var isNumeric = window.prompt("Do you want to include numbers?\n \"Y\" or \"N\"");
  if (isNumeric === null)
    return "";
  var isLower = window.prompt("Do you want to include lowercase characters in your password?\n \"Y\" or \"N\"");
  if (isLower === null)
    return "";
  var isUpper = window.prompt("Do you want to include uppercase characters?\n \"Y\" or \"N\"");
  if (isUpper === null)
    return "";

  if (isSpecial === "Y" || isSpecial === "y")
  isYes = true;
  if (isNumeric === "Y" || isNumeric === "y")
  isYes = true;
  if (isLower === "Y" || isLower === "y")
  isYes = true;
  if (isUpper === "Y" || isUpper === "y" )
  isYes = true;

  if (!isYes) {
    window.alert("You must select atleast one character type. Please start over. ");
    return generatePass();

  }

  var password = "";
  var i = 0;

  while (i < length) {
    if (isSpecial === "Y" || isSpecial === "y") {
      var charIndex = Random(0, charSets.special.length - 1);
      var character = charSets.special[charIndex];

      password = password + character;
      i++;
      if (i >= length)
      break;
    }

    if (isNumeric === "Y" || isNumeric === "y") {
      var charIndex = Random(0, charSets.numeric.length - 1);
      var character = charSets.numeric[charIndex];

      password = password + character;
      i++;
      if (i >= length)
      break;
    }

    if (isLower === "Y" || isLower === "y") {
      var charIndex = Random(0, charSets.lower.length - 1);
      var character = charSets.lower[charIndex];

      password = password + character;
      i++;
      if (i >= length)
      break;
    }

    if (isUpper === "Y" || isUpper === "y") {
      var charIndex = Random(0, charSets.upper.length - 1);
      var character = charSets.upper[charIndex];

      password = password + character;
      i++;
      if (i >= length)
      break;
    }
  }
  return password;

}

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePass();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
