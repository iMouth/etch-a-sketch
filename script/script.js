const grid = document.getElementById("grid-container");
const clear = document.querySelector("#clear");
const newGrid = document.querySelector("#newGrid");
const rainbow = document.querySelector("#rainbow");
const black = document.querySelector("#black");
let color = "black";

window.addEventListener("load", setGrid(4));
clear.addEventListener("click", clearGrid);
newGrid.addEventListener("click", resetGrid);
raindbow.addEventListener("click", () => {
  color = "white";
});
black.addEventListener("click", () => {
  color = "black";
});

function setGrid(gridSize) {
  grid.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
  for (let i = 0; i < gridSize * gridSize; i++) {
    const gridSquare = document.createElement("div");
    gridSquare.classList.add("square");
    gridSquare.addEventListener("mouseover", function (e) {
      if (color == "black") {
        e.target.style.backgroundColor = "black";
      } else {
        e.target.style.backgroundColor = generateRandomColor();
      }
    });
    grid.appendChild(gridSquare);
  }
}

function resetGrid() {
  removeGrid();
  let gridSize = -1;
  while (gridSize > 100 || gridSize < 0) {
    gridSize = prompt("Enter new grid size (Min: 1 Max: 100)");
  }
  setGrid(gridSize);
}

function removeGrid() {
  const gridArray = Array.from(grid.childNodes);
  gridArray.forEach((element) => {
    grid.removeChild(element);
  });
}

function clearGrid() {
  const gridArray = Array.from(grid.childNodes);
  gridArray.forEach((element) => {
    element.style.backgroundColor = "transparent";
  });
}

function generateRandomColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}
