import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js"
import { getDatabase,
         ref,
         push } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-database.js"

const firebaseConfig = {
    databaseURL: "https://birthday-app---scrimba-default-rtdb.europe-west1.firebasedatabase.app/",
    databaseAPIKey: "AIzaSyDPCLO6S6T6x7SCyH-jNXjZ-MHAuYwxKpg"
}

const app = initializeApp(firebaseConfig)
const database = getDatabase(app)
const referenceInDB = ref(database, "birthdays")

const birthdayInputField = document.getElementById("birthday-input")
const submitButton = document.getElementById("submit-button")

submitButton.addEventListener("click", function() {
    push(referenceInDB, birthdayInputField.value)
    birthdayInputField.value = ""
})

console.log("birthdayInputField key:", referenceInDB.value) // Logs the key of the reference