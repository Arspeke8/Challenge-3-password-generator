// Assignment code here
var Uppercaseletters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercaseletters = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789";
var specialcharacters = "!@#$%^&*()";
var holdingcharacters = "";
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  let passwordlink = prompt(
    "Please enter password length characters between 8 - 128"
  );
  if (passwordlink < 8 || passwordlink > 128) {
    window.alert("Wrong Length!");
    return;
  }

  let finalpassword = "";

  let Uppercase = confirm(
    "Do you want Upppercase Letters? Click OK to add, or click Cancel for no."
  );
  console.log(Uppercase);
  if (Uppercase === true) {
    holdingcharacters += Uppercaseletters;
    finalpassword +=
      Uppercaseletters[Math.floor(Math.random() * Uppercaseletters.length)];
  } else Uppercase == false;
  console.log(holdingcharacters);

  let lowercase = confirm(
    "Do you want lowercase Letters? Click OK to add, or click Cancel for no."
  );
  console.log(lowercase);
  if (lowercase === true) {
    holdingcharacters += lowercaseletters;
    finalpassword +=
      lowercaseletters[Math.floor(Math.random() * lowercaseletters.length)];
  } else lowercase == false;

  console.log(holdingcharacters);

  let number = confirm(
    "Do you want numbers? Click OK to add, or click Cancel for no."
  );
  console.log(number);
  if (number === true) {
    holdingcharacters += numbers;
    finalpassword += numbers[Math.floor(Math.random() * numbers.length)];
  } else number == false;

  console.log(holdingcharacters);

  let specialcharacter = confirm(
    "Do you want special characters Letters? Click OK to add, or click Cancel for no."
  );
  console.log(specialcharacter);
  if (specialcharacter === true) {
    holdingcharacters += specialcharacters;
    finalpassword +=
      specialcharacters[Math.floor(Math.random() * specialcharacters.length)];
  } else specialcharacter == false;

  console.log(finalpassword);
  console.log(holdingcharacters);

  //password length value is stored in passwordlink

  for (var i = 0; finalpassword.length < passwordlink; i++) {
    finalpassword += holdingcharacters.charAt(
      Math.floor(Math.random() * holdingcharacters.length)
    );
  }
  var shufflepassword = finalpassword
    .split("")
    .sort(function () {
      return 0.5 - Math.random();
    })
    .join("");
  return shufflepassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  console.log(writePassword);
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
