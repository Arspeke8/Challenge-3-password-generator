// Assignment code here
var Uppercaseletters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var lowercaseletters = "abcdefghijklmnopqrstuvwxyz"
var numbers = "0123456789"
var specialcharcters = "!@#$%^&*()"
var holdingcharacters = ""
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {

  let passwordlink = prompt("Please enter password length characters between 8 - 128");
  if (passwordlink < 8 || passwordlink > 128) {
    window.alert("Wrong Length!")
    return
  }

  let Uppercase = confirm("Do you want Upppercase Letters?");
  console.log(Uppercase)
  if (Uppercase === true) {
    holdingcharacters += Uppercaseletters
  } console.log(holdingcharacters)

  let lowercaseletters = confirm("Do you want lowercase Letters?");
  console.log(lowercaseletters)
  if (lowercaseletters === true) {
    holdingcharacters += lowercaseletters
  } console.log(holdingcharacters)

  let numbers = confirm("Do you want numbers?");
  console.log(numbers)
  if (numbers === true) {
    holdingcharacters += numbers
  } console.log(holdingcharacters)

  let specialcharcters = confirm("Do you want special characters Letters?");
  console.log(specialcharcters)
  if (specialcharcters === true) {
    holdingcharacters += specialcharcters
  } console.log(holdingcharacters)

  for (var i = 0; i < holdingcharacters.length; i++) { }
  { console.log(holdingcharacters)[i] }

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
