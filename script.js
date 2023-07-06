createSketchpad();
draw();
changeGrid();

function createSketchpad(input = 16) {
  const container = document.querySelector(".sketch-container");
  const containerHeight = container.offsetHeight;
  const containerWidth = container.offsetWidth;
  const area = input ** 2;

  for (let i = 0; i < area; i++) {
    const grid = document.createElement("div");
    grid.classList.add("grid");
    grid.style.height = `${containerHeight / input}px`; // Requires page reload to work if viewport is changed
    grid.style.width = `${containerWidth / input}px`;
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

function handleGridChange() {
  const container = document.querySelector(".sketch-container");
  const input = +prompt("Enter grid size", 16);

  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }

  createSketchpad(input);
  draw(); // Creates new references so events fire on new grids
}

function changeGrid() {
  const button = document.querySelector(".button");
  button.addEventListener("click", handleGridChange);
}
