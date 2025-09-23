// Save a value to localStorage
// Delete your code and refresh the page
// Fetch your value from localStorage and log it out
let myData = localStorage.getItem("myData")
if (!myData) {
    myData = "Hello, World!"
    localStorage.setItem("myData", myData)
}
console.log(myData)

// Quiz AI review:
//You're on the right track with localStorage.getItem(), but there's a logical issue. You're trying to get a value that might not exist yet, then setting it back to localStorage. Think about the order of operations - what should you do first to ensure there's actually something to retrieve?