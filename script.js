const screen = document.querySelector(".inside");
const box = [];

const pinkButton = document.getElementById("buttonPink");
const blackButton = document.getElementById("buttonBlack");
const whiteButton = document.getElementById("buttonWhite");

const clearButton = document.getElementById("buttonClear");


for(let i = 0; i < 384; i++){
    box[i] = document.createElement('div');
    box[i].style.backgroundColor = "white";
    box[i].style.width = "100%";
    box[i].style.height = "100%";
    screen.appendChild(box[i]);
}


pinkButton.addEventListener("click", () =>{
    for(let i = 0; i < 384; i++){
        box[i].addEventListener("mouseenter", () => box[i].style.cssText = "background-color:pink;");
    }
})

blackButton.addEventListener("click", () =>{
    for(let i = 0; i < 384; i++){
        box[i].addEventListener("mouseenter", () => box[i].style.cssText = "background-color:black;");
    }
})

whiteButton.addEventListener("click", () =>{
    for(let i = 0; i < 384; i++){
        box[i].addEventListener("mouseenter", () => box[i].style.cssText = "background-color:white;");
    }
})

clearButton.addEventListener("click", () => {
    for(let i = 0; i < 384; i++){
       box[i].style.cssText = "background-color:white";
    }
})

