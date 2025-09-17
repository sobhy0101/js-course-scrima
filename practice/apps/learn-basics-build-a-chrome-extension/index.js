let myLeads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"]
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    console.log(myLeads)
})

// for (let i = 0; i < myLeads.length; i++) {
//     // ulEl.innerHTML += "<li>" + myLeads[i] + "</li>"
//     // create element
//     // set text content
//     // append to ul
//     const listedItem = document.createElement("li") // Using createElement method to create a new li element instead of using innerHTML
//     listedItem.textContent = myLeads[i] // Setting the text content of the li element to the current lead qarray item
//     ulEl.append(listedItem) // Appending the li element to the ul element using the append method
// }

// New Quiz:
// 1. Create a variable, listItems, to hold all the HTML for the list items
// Assign it to an empty string to begin with
let listItems = ""
for (let i = 0; i < myLeads.length; i++) {
    // 2. Add the item to the listItems variable instead of the ulEl.innerHTML
    listItems += "<li>" + myLeads[i] + "</li>"
    console.log(listItems)
}
// 3. Render the listItems inside the unordered list using ulEl.innerHTML
ulEl.innerHTML = listItems




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