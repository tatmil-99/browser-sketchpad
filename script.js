createSketchpad();
draw();

function createSketchpad() {
  const container = document.querySelector(".sketch-container");
  const containerHeight = container.offsetHeight;
  const containerWidth = container.offsetWidth;

  for (let i = 0; i < 256; i++) {
    const grid = document.createElement("div");
    grid.classList.toggle("grid");
    grid.style.height = `${containerHeight / 16}px`; // Requires page reload to work if viewport is changed
    grid.style.width = `${containerWidth / 16}px`;
    container.appendChild(grid);
  }
}

function fillGrid(e) {
  e.target.classList.toggle("grid-color");
}

function draw() {
  const grids = document.querySelectorAll(".grid");
  grids.forEach((grid) => grid.addEventListener("mouseover", fillGrid));
}
