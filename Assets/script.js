// Assignment code here
var Uppercaseletters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var lowercaseletters = "abcdefghijklmnopqrstuvwxyz"
var numbers = "0123456789"
var specialcharacters = "!@#$%^&*()"
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

  let lowercase = confirm("Do you want lowercase Letters?");
  console.log(lowercase)
  if (lowercase === true) {
    holdingcharacters += lowercaseletters
  } console.log(holdingcharacters)

  let number = confirm("Do you want numbers?");
  console.log(number)
  if (number === true) {
    holdingcharacters += numbers
  } console.log(holdingcharacters)

  let specialcharacter = confirm("Do you want special characters Letters?");
  console.log(specialcharacter)
  if (specialcharacter === true) {
    holdingcharacters += specialcharacters
  } console.log(holdingcharacters)

  //password length value is stored in passwordlink 

  for (var i = 1; i < passwordlink; i++) {
    writePassword += holdingcharacters.charAt(Math.floor(Math.random() *
      holdingcharacters.length));

  }
}
/*
for (var i = 0; i < holdingcharacters.length; i++) { }
{ console.log(holdingcharacters)[i] } if 

holdingcharacters ==
*/


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  console.log(writePassword)
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

/* I have holdingcharacters - which has a string of my random characters. How do I get "holdingcharacters"
to randomly choose from the holdingcharacters on the input value from my beginning prompt "passwordlink" 
which will hold a value of 8 - 128 picking whatever randomly using //Math.floor(Math.random() * max);
But my string has a length of 72 Need to pick from:
var Uppercaseletters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var lowercaseletters = "abcdefghijklmnopqrstuvwxyz"
var numbers = "0123456789"
var specialcharacters = "!@#$%^&*()"
one by one randomly so it picks from all randomly 72

function makeid(length) {
   var result           = '';
   var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
   var charactersLength = characters.length;
   for ( var i = 0; i < length; i++ ) {
     result += characters.charAt(Math.floor(Math.random() * 
charactersLength));
  }
  return result;
}

console.log(makeid(5)); 
*/
