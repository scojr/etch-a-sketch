const container = document.querySelector(".container");
const colorPicker = document.querySelector("#colorButton");
let penColor = colorPicker.value;
let resolution = 32;
drawGrid(resolution);

function drawGrid(size) {
    clearGrid()
    for (i = 0; i < size; i++) {
        let row = document.createElement("div");
        row.className = ("row");
        for(j = 0; j < size; j++) {
            let square = document.createElement("div")
            square.className = ("square");
            square.addEventListener("mousedown", draw);
            square.addEventListener("mouseover", draw);
            row.appendChild(square);
        }
        container.appendChild(row);
    }
}

function clearGrid() {
    while (container.firstChild) {
        container.firstChild.remove();
    }
}

const gridButton = document.querySelector("#gridButton");
gridButton.addEventListener("click", function newGrid() { 
    let newSize = parseInt(prompt("Enter New Grid Resolution (Up to 100):"));
    if (newSize <= 100) {
        resolution = newSize;
        drawGrid(resolution);
        gridButton.textContent = (`Grid Resolution -  ${resolution} x ${resolution}`);
    } else {
        alert("Please enter a valid integer under 100")
    }
    });

    
const clearButton = document.querySelector("#clearButton");
clearButton.addEventListener("click", () => drawGrid(resolution));

let toggle = true;
const guidelineButton = document.querySelector("#guidelineButton");
guidelineButton.addEventListener("click", function toggleGuidelines() {
    const squares = document.querySelectorAll(".square");
    console.log(toggle);
    for (i = 0; i < squares.length; i++) {
        if (toggle) {
            squares[i].style.border = "1px solid Gainsboro";
        } else {
            squares[i].style.border = "0";
        }
    }
    toggle = !toggle;
});

let isMouseDown = false;

const body = document.querySelector("body")

body.addEventListener("mousedown", function mouseDown(e) {
    isMouseDown = true;
    e.preventDefault();
});

body.addEventListener("mouseup", function mouseUp(e) {
    isMouseDown = false;
    e.preventDefault();
});


function draw(event){
    if (event.type === "mousedown") {
        penColor = colorPicker.value;
        event.target.style.backgroundColor = (penColor);
        event.preventDefault();
    }
    if (event.type === "mouseover" && isMouseDown) {
        penColor = colorPicker.value;
        event.target.style.backgroundColor = (penColor);
        event.preventDefault();
    }
};