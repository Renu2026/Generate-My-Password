// Assignment Code
var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click",writePassword)
// Array of characters to be included in password
var specials = '!@#$%^&*()_+{}:"<>?\|[];\',./`~';
var lowercase = 'abcdefghijklmnopqrstuvwxyz';
var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var numbers = '0123456789';
var all = specials + lowercase + uppercase + numbers;

  
  
function askBoolean(question){
  var promptResult = prompt(question)
  if(promptResult == "yes"){
    return true
  } else {
    return false
  }
} 
function generatePassword() {

  
  do{
    var promptResult = prompt("How many characters?");
    var includeLowerCase = askBoolean("include lower case characters ?")
    var includeUpperCase = askBoolean("include Upper case characters ?")
    var includeSpecialChar = askBoolean("include Specail Chracters ?")
    var includeNumbers = askBoolean("include Numbers ?")
    var numberOfChar = parseInt(promptResult);
  }  while (
    (numberOfChar < 8 || numberOfChar > 128) || 
    !(includeLowerCase || includeUpperCase || includeSpcialChar || includeNumbers) 
    )

  
    var randompassword = "";
    for (var i = 0; i < numberOfChar; ) {
    if (includeLowerCase) {
      var randompassword = randompassword+lowercase[Math.floor(Math.random() * lowercase.length)];
      i++
    }
    if (includeUpperCase){
      var randompassword = randompassword+uppercase[Math.floor(Math.random() * uppercase.length)];
      i++
    }
    if (includeSpecialChar){
      var randompassword = randompassword+specials[Math.floor(Math.random() * specials.length)];
      i++
    }
    if (includeNumbers){
      var randompassword = randompassword+numbers[Math.floor(Math.random() * numbers.length)]; 
      i++
    }
    
    console.log (randompassword);
   }

  return randompassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
 
 
 

