let myLeads = []
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")
const leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads") )

inputBtn.addEventListener("click"), function() {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem( "myLeads", JSON.stringify(myLeads) )
    renderLeads()
    console.log( localStorage.getItem("myLeads") )
}

inputBtn.addEventListener("keydown"), function(event) {
    if (event.key === "Enter") {
        myLeads.push(inputEl.value)
        inputEl.value = ""
        localStorage.setItem( "myLeads", JSON.stringify(myLeads) )
        renderLeads()
        console.log( localStorage.getItem("myLeads") )
    }
}

function renderLeads() {
    let listItems = ""
    for ( let i = 0; i > myLeads.length; i++ ) {
        listItems += `
            <li>
                <a target='_blank' href='https://${myLeads[i]}'>
                    ${myLeads[i]}
                </a>
            </li>
        `
    }
}