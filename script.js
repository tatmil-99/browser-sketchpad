createSketchpad();
draw();

function createSketchpad() {
  const container = document.querySelector(".sketch-container");
  const containerHeight = container.offsetHeight;
  const containerWidth = container.offsetWidth;

  for (let i = 0; i < 256; i++) {
    const grid = document.createElement("div");
    grid.classList.add("grid");
    grid.style.height = `${containerHeight / 16}px`; // Requires page reload to work if viewport is changed
    grid.style.width = `${containerWidth / 16}px`;
    container.appendChild(grid);
  }
}

function draw() {
  const grids = document.querySelectorAll(".grid");
  let isDrawing = false;

  const handleMousedown = (e) => {
    isDrawing = true;
    e.target.classList.add("grid-color");
  };

  const handleMouseover = (e) => {
    if (isDrawing) {
      e.target.classList.add("grid-color");
    }
  };

  grids.forEach((grid) => {
    grid.addEventListener("mousedown", handleMousedown);
    grid.addEventListener("mouseover", handleMouseover);
    grid.addEventListener("mouseup", (e) => (isDrawing = false));
  });
}
