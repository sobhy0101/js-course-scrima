const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passwordLength = 15
let passwordOneEl = document.getElementById("password-one")
let passwordTwoEl = document.getElementById("password-two")
let generateButton = document.getElementById("generate-button")

generateButton.addEventListener("click", function() {
    passwordOneEl.textContent = ""
    passwordTwoEl.textContent = ""

    passwordLength = document.getElementById("length").value
    let includeUppercase = document.getElementById("includeUppercase").checked
    let includeNumbers = document.getElementById("includeNumbers").checked
    let includeSymbols = document.getElementById("includeSymbols").checked

    let passwordOne = generatePassword(includeUppercase, includeNumbers, includeSymbols)
    let passwordTwo = generatePassword(includeUppercase, includeNumbers, includeSymbols)
    passwordOneEl.textContent = passwordOne
    passwordTwoEl.textContent = passwordTwo
})
function generatePassword(includeUppercase, includeNumbers, includeSymbols) {
    let password = ""
    let availableCharacters = []

    // Always include lowercase letters
    availableCharacters = availableCharacters.concat(characters.slice(26, 52))

    if (includeUppercase) {
        availableCharacters = availableCharacters.concat(characters.slice(0, 26))
    }
    if (includeNumbers) {
        availableCharacters = availableCharacters.concat(characters.slice(52, 62))
    }
    if (includeSymbols) {
        availableCharacters = availableCharacters.concat(characters.slice(62))
    }
    for (let i = 0; i < passwordLength; i++) {
        password += availableCharacters[Math.floor(Math.random() * availableCharacters.length)]
    }
    return password
}

// Create a function that copys the password to clipboard when clicked
passwordOneEl.addEventListener("click", function() {
    navigator.clipboard.writeText(passwordOneEl.textContent)
    document.getElementById("copy-notification").textContent = "Password 1 copied to clipboard!"
})

passwordTwoEl.addEventListener("click", function() {
    navigator.clipboard.writeText(passwordTwoEl.textContent)
    document.getElementById("copy-notification").textContent = "Password 2 copied to clipboard!"
})