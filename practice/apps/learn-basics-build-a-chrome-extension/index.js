let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    renderLeads()
})



function renderLeads() {
    let listItems = ""
    for (let i = 0; i < myLeads.length; i++) {
        // Wrap the lead in an anchor tag (<a>) inside the <li>
        // Can you make the link open in a new tab?
        //listItems += "<li><a target='_blank' href='https://" + myLeads[i] + "'>" + myLeads[i] + "</a></li>"
    // There is a better way to do this instead of concatenating strings
    // It's called template strings (template literals)
    // With template strings, we can use backticks (`) instead of quotes (" or ')
    // We can also use ${} to insert variables and expressions into the string
    // This makes it easier to read and write HTML strings in JavaScript
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