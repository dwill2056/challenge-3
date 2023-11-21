// Assignment Code
var generateBtn = document.querySelector("#generate");
function generatePassword(){
  var passwordSize=prompt ("Enter between 8-128 characters")
  if(passwordSize>= 8&&passwordSize<=128){
var confirmLowercase = confirm("Do you want lowercase characters")
var confirmUppercase = confirm("Do you want uppercase")
var confirmSpecial = confirm("Do you want special characters")
var confirmNumeric = confirm("Do you want any numbers")
  }
  else{
    alert("invalid size")
  }
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
