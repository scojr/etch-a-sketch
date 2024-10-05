const container = document.querySelector(".container");
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
    if (isMouseDown) {
    event.target.style.backgroundColor = ("black");
    }
};