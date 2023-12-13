const container = document.getElementById("container");

function makeRows(rows, cols) {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (c = 0; c < (rows * cols); c++) {
        let cell = document.createElement("div");
        container.appendChild(cell).className = "grid-item";
    }

    let placeColor = document.querySelectorAll(".grid-item");

    placeColor.forEach(item => {
        item.addEventListener("mouseover", () => {
            item.style.backgroundColor = "#464646";
            item.style.border = "1px solid #464646"
        });
    });
}

let i = 16;
makeRows(i, i);

let sizeSelect = document.querySelector("#mySizeButton");
sizeSelect.addEventListener("click", () => {
    j = parseInt(prompt("Enter a number between 1 and 64 to choose the grid size"));

    if (j <= 0 || j > 64 || isNaN(j)) {   
        alert("Error: Please enter a valid number between 1 and 64");
    } else {
        makeRows(j, j);
    }
});