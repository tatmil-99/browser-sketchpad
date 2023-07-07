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
    grid.style.height = `${containerHeight / input}px`;
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

function validateInput() {
  let input;

  do input = +prompt("Enter grid size. E.g. 32 for 32x32 grid", 32);
  while (input > 100 || isNaN(input));

  return input == 0 ? 16 : input; // Reverts grid to default of 16x16 if prompt is cancelled.
}

function handleGridChange() {
  const container = document.querySelector(".sketch-container");
  const input = validateInput();

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
