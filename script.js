// Create reference to sketch container node
// Create x divs based on grid selection (16x16, a = 256);
// Create size of grid based on height and width of container / grid selection (h = 600 / 16, w = 600 / 16)
// Apply classname and styling to divs
// Append to parent node

const sketchpad = document.querySelector(".sketch-container");
const containerHeight = sketchpad.offsetHeight;
const containerWidth = sketchpad.offsetWidth;

for (let i = 0; i < 256; i++) {
  const newDiv = document.createElement("div");
  newDiv.classList.toggle("grid");
  newDiv.style.height = `${containerHeight / 16}px`; // Requires page reload to work if viewport is changed
  newDiv.style.width = `${containerWidth / 16}px`;
  sketchpad.appendChild(newDiv);
}
