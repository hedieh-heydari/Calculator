let displayBox = document.querySelector(".display");


function showDisplay(event) {
    const x = event.target.innerText;
    if (displayBox.innerHTML == 0) {
        return displayBox.innerHTML = x;
    }
    return displayBox.innerHTML += x;
}

function calculate() {
let result = displayBox.innerText;
displayBox.innerText = eval(result);
}

function clearAll() {
displayBox.innerText= 0 ;
}

function clear() {
    let text = displayBox.innerText;
    if (text.length === 1) {
        displayBox.innerText = 0 ;
    } else {
        displayBox.innerText = text.substring(0, text.length - 1 );
    }
}

function sin() {
displayBox.innerText = Math.sin(parseInt(displayBox.innerText));
}

function cos() {
    displayBox.innerText = Math.cos(parseInt(displayBox.innerText));
}

function tan() {
    displayBox.innerText = Math.tan(parseInt(displayBox.innerText));
}
function sqrt() {
    let a = parseInt(displayBox.innerText)
    displayBox.innerText = Math.sqrt(a);  
}

function pow() {
    displayBox.innerText = Math.pow(parseInt(displayBox.innerText) , 2);
}


document.querySelector(".calculate").addEventListener("click", calculate);
document.querySelector(".all-clear").addEventListener("click", clearAll);
document.querySelector(".clear-last").addEventListener("click", clear);
document.querySelector(".sin").addEventListener("click", sin);
document.querySelector(".cos").addEventListener("click", cos);
document.querySelector(".tan").addEventListener("click", tan);
document.querySelector(".sqrt").addEventListener("click", sqrt);
document.querySelector(".pow").addEventListener("click", pow);


let list = document.querySelectorAll(".show-display");
list.forEach(item => {
    item.addEventListener("click", showDisplay);
})

