<<<<<<< HEAD
let count = 5;
let increaseCounter = document.getElementById("inc");
let decreaseCounter = document.getElementById("dec");
let resetCounter = document.getElementById("reset");
=======
let count = 0;
document.getElementById("count").innerText = count;
console.log(count);
>>>>>>> 9b42e016e960b29d65f37692e448ce432da403af

<<<<<<< HEAD
let counterDisplay = document.getElementById("count");


counterDisplay.innerText = count;


function increaseFuncation() {
  count++;
  counterDisplay.innerText = count;
  console.log(count);
}
=======
function increseFunction() {
    count++;
    document.getElementById("count").innerText = count;
    console.log(count);
}

function decreaseFunction() {
    count--;
    if (count < 0) {
        count = 0;
    }
    document.getElementById("count").innerText = count;
    console.log(count);
}

function resetFuncation() {
    count = 0;
    document.getElementById("count").innerText = count;
    let lightShade = "#6d6d6db9";
    document.getElementsByClassName("card")[0].style.backgroundColor = lightShade;
    console.log(count);
}


>>>>>>> 9b42e016e960b29d65f37692e448ce432da403af