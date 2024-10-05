const container = document.querySelector(".container");
drawGrid(16,16);


function drawGrid(size) {
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

const gridButton = document.querySelector("#gridButton");
gridButton.addEventListener("click", function newGrid() { 
    let newSize = parseInt(prompt("Enter New Grid Resolution (Up to 100):"));
    if (newSize <= 100) {
        while (container.firstChild) {
            container.firstChild.remove();
        }
        drawGrid(newSize);
    } else {
        alert("Please enter a valid integer under 100")
    }
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
    if (isMouseDown) {
    event.target.style.backgroundColor = ("black");
    }
};