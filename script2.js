// define range 
var range = {
    minLength: 8,
    maxLength: 128
  }
  
  // create arrays
  var characterSets = {
    lower: "abcdefghijklmnopqrstuvwxyz",
    upper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    numeric: "0123456789",
    special: "!@#$%^&*()_-+=?{}[]:;"
  }
  
  // to determine length, create function to generate random whole number within specified range
  var getRandom = function(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }
  
  // create function to generate password
  var generatePassword = function() {
    var length = window.prompt("How long would you like your password to be?\n Enter a number of digits between " +
      range.minLength + "-" + range.maxLength + ".");
    if (length === null)
      return "";
  
     // did user enter a valld number between 8-128?
    length = parseInt(length);
    if (Number.isNaN(length) || length < range.minLength || length > range.maxLength) {
      window.alert("Please enter a number between " + range.minLength + "-" + range.maxLength + ".");
      return generatePassword();
    }
  
    //ask user which character sets they would like to use
    var typedYes = false;
    var useLower = window.prompt("Do you want to include lowercase characters in your password?\nType \"YES\" or \"NO\"");
    if (useLower === null)
      return "";
    var useUpper = window.prompt("Do you want to include uppercase characters?\nType \"YES\" or \"NO\"");
    if (useUpper === null)
      return "";
    var useNumeric = window.prompt("Do you want to include numbers?\nType \"YES\" or \"NO\"");
    if (useNumeric === null)
      return "";
    var useSpecial = window.prompt("Do you want to include symbols/special characters?\nType \"YES\" or \"NO\"");
    if (useSpecial === null)
      return "";
  
    // did user type yes?
    if (useLower === "YES" || useLower === "yes")
      typedYes = true;
    if (useUpper === "YES" || useUpper === "yes")
      typedYes = true;
    if (useNumeric === "YES" || useNumeric === "yes")
      typedYes = true;
    if (useSpecial === "YES" || useSpecial === "yes")
      typedYes = true;
  
    // did user select at least one character type?
    if (!typedYes) {
      window.alert("You must select at least one character type. Please start over.");
      return generatePassword();
    }
  
    // generate password with random characters from arrays
    var password = "";
    var i = 0;
    while (i < length) {
      if (useLower === "YES" || useLower === "yes") {
        var characterIndex = getRandom(0, characterSets.lower.length - 1);
        var character = characterSets.lower[characterIndex];
        password = password + character;
        i++;
        if (i >= length)
          break;
      }
      if (useUpper === "YES" || useUpper === "yes") {
        var characterIndex = getRandom(0, characterSets.upper.length - 1);
        var character = characterSets.upper[characterIndex];
        password = password + character;
        i++;
        if (i >= length)
          break;
      }
      if (useNumeric === "YES" || useNumeric === "yes") {
        var characterIndex = getRandom(0, characterSets.numeric.length - 1);
        var character = characterSets.numeric[characterIndex];
        password = password + character;
        i++;
        if (i >= length)
          break;
      }
      if (useSpecial === "YES" || useSpecial === "yes") {
        var characterIndex = getRandom(0, characterSets.special.length - 1);
        var character = characterSets.special[characterIndex];
        password = password + character;
        i++;
        if (i >= length)
          break;
      }
    }
    return password;
  }
  
  // Assignment Code
  var generateBtn = document.querySelector("#generate");
  
  // Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  
  }
  
  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);