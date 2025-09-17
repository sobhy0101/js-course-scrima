let myLeads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"]
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    console.log(myLeads)
})

for (let i = 0; i < myLeads.length; i++) {
    ulEl.innerHTML += "<li>" + myLeads[i] + "</li>"

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
