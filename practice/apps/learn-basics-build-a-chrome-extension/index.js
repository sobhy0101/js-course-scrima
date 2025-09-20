let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

///////////////////  Local Storage ////////////////////////
// Practice using localStorage
// To test it out, open the browser console and type localStorage to see what is stored in localStorage or else go to Application tab > Local Storage
// 1. Save a key-value pair in localStorage
// 2. Refresh the page. Get the value and log it to the console
// 3. Clear localStorage

// HINTS:
// localStorage.setItem(key, value)
// localStorage.getItem(key)
// localStorage.clear()
// PS: both key and value need to be strings

localStorage.setItem("My Leads", "www.google.com") // saves the key-value pair in localStorage
let name = localStorage.getItem("My Leads") // retrieves the value from localStorage using the key
console.log(name)

localStorage.clear() // clears localStorage

///////////////////// End of Local Storage ///////////////////////////

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    renderLeads()
})

// Support saving with Enter key
inputEl.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        myLeads.push(inputEl.value)
        inputEl.value = ""
        renderLeads()
    }
})



function renderLeads() {
    let listItems = ""
    for (let i = 0; i < myLeads.length; i++) {
        listItems += `
            <li>
                <a target='_blank' href='https://${myLeads[i]}'>
                    ${myLeads[i]}
                </a>
            </li>
        `
    }
    ulEl.innerHTML = listItems
}

// ///////////// Template Strings Quiz /////////////

// // template strings/literals

// const recipient = "James"
// const sender = "Mike"

// const email = `
// Hey ${recipient}!

// How is it going?

// Cheers ${sender}
// `

// console.log(email)

////////////////////////////////////////////////////////////////

// // If possible, use const. If not, use let.

// // Which variables below should be changed from let to const?

// // The customer wants to order some stuff. Here are the details:
// const basePrice = 520
// const discount = 120
// let shippingCost = 12
// let shippingTime = "5-12 days"

// // Whops! Turns out the shipping will be a bit more complex
// shippingCost = 15
// shippingTime = "7-14 days"

// // Calculating the full price
// const fullPrice = basePrice - discount + shippingCost

// // Finally, notifying the customer
// console.log("Total cost: " + fullPrice + ". It will arrive in " + shippingTime)



// ///////////// To edit the HTML elements using the DOM innerHTML with a single string containing the entire HTML element (opening tag, content, closing tag) and assign it to innerHTML  /////////////
// const container = document.getElementById("container")

// container.innerHTML = "<button>Buy!</button>" // adds a button inside the container div
// ////////////////////////////////////////////////////////////////

// // To maintain the previous HTML and add new HTML, use += instead of = | Otherwise, it will overwrite the previous HTML
// 
// const container = document.getElementById("container")

// container.innerHTML = "<button onclick='buy()'>Buy!</button>"

// // When clicked, render a paragraph under the button (in the container)
// // that says "Thank you for buying!"

// function buy() {
//     container.innerHTML = "<button onclick='buy()'>Buy!</button>" + "<p>Thank you for buying!</p>" // With this code, the button will remain after clicking it because we are overwriting the entire innerHTML of the container div
//     container.innerHTML += "<p>Thank you for buying!</p>" // With this code, the button will disappear after clicking it because we are adding a new paragraph to the existing innerHTML of the container div
//}