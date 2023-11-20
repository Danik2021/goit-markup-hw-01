

let button = document.getElementsByClassName("button")[0]

button.addEventListener("click", toggleColor)

function toggleColor() {
    let textH1 = document.getElementsByClassName("h1")[0]
    if (textH1.style.color == "black") {
        textH1.style.color = "yellow"    
    } 
    else {
        textH1.style.color = "black"
    }
}