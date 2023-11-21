// Assignment Code
var lowercase = "abcdefghijklmnopqrstuvwxyz"
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var special = "!@#$%^&*"
var numbers = "1234567890"
var generateBtn = document.querySelector("#generate");
function generatePassword() {
  var password = ""
  var passwordSize = prompt("Enter between 8-128 characters")
  if (passwordSize >= 8 && passwordSize <= 128) {
    var confirmLowercase = confirm("Do you want lowercase characters")
    var confirmUppercase = confirm("Do you want uppercase")
    var confirmSpecial = confirm("Do you want special characters")
    var confirmNumeric = confirm("Do you want any numbers")
    if (confirmLowercase === false && confirmUppercase === false && confirmNumeric === false && confirmSpecial === false) {
      alert("Must choose one type")
    }
    for (let i = 0; i < passwordSize; i++) {



      if (confirmLowercase && password.length < passwordSize) {
        var randomIndex = Math.floor(Math.random() * 26)
        password = password + lowercase[randomIndex]
      }
      if (confirmUppercase && password.length < passwordSize) {
        var randomIndex = Math.floor(Math.random() * 26)
        password = password + uppercase[randomIndex]
      }
      if (confirmSpecial && password.length < passwordSize) {
        var randomIndex = Math.floor(Math.random() * 8)
        password = password + special[randomIndex]
      }
      if (confirmNumeric && password.length < passwordSize) {
        var randomIndex = Math.floor(Math.random() * 10)
        password = password + numbers[randomIndex]
      }
    }
  }
  else {
    alert("invalid size")
  }
  return password
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
