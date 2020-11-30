// Assignment Code
var generateBtn = document.querySelector("#generate");

// Array of characters to be included in password
var characters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
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
    var numberOfChar = parseInt(promptResult);
  }while(numberOfChar < 7 || numberOfChar > 138)
  
  var includeLower = askBoolean("include lower case characters ?")
  var includeUppercase = askBoolean("include Upper case characters ?")
  var includeSpcialChar = askBoolean("include Specail Chracters ?")
  
  var password = "";
  for (var i = 0; i < numberOfChar; i++) {
  
    var randIndex = Math.floor(Math.random() * characters.length);
    var randElement = characters[randIndex];
    if (i % 2 == 0 && includeUppercase){
      password = password + randElement.toUpperCase()
    }else {
      password = password + randElement
    }
    
  }

  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
 function getrandomlower(){

 }
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
/*
function generatePassword(upper, lower, number, symbol, length){
    let generatedPassword = "";

    const typesCount = upper + lower + number + symbol;

    //console.log(typesCount);

    const typesArr = [{upper}, {lower}, {number}, {symbol}].filter(item => Object.values(item)[0]);

    if(typesCount === 0) {
        return '';
    }

    for(let i=0; i<length; i+=typesCount) {
        typesArr.forEach(type => {
            const funcName = Object.keys(type)[0];
            generatedPassword += randomFunc[funcName]();
        });
    }

    const finalPassword = generatedPassword.slice(0, length);


    return finalPassword;
}
*/


