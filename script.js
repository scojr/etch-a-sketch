drawGrid(16,16);


function drawGrid(height, width) {
    const container = document.querySelector(".container");
    for (i = 0; i < height; i++) {
        let row = document.createElement("div");
        row.className = ("row");
        for(j = 0; j < width; j++) {
            let square = document.createElement("div")
            square.className = ("square");
            row.appendChild(square);
        }
        container.appendChild(row);
    }
        
}