let gridSize = 20;
const flexContainer = document.querySelector(".flex-container");


for (let i = 0; i < gridSize; i++) {
  let newRow = document.createElement("div");
  newRow.classList.add("flex-item")
  for (let j = 0; j < gridSize; j++) {
    let newGridBlock = document.createElement("div");
    newGridBlock.classList.add("grid-box");
    newRow.appendChild(newGridBlock);
  }
  flexContainer.appendChild(newRow);
}
const gridBlocks = document.querySelectorAll(".grid-box");
addHoverEvent();

// This function is used to change the colour of the grid boxes on hover.
function changeColor(e) {
  this.style.backgroundColor = "red";
}

function addHoverEvent() {
  gridBlocks.forEach((gridBlock) => {
    gridBlock.addEventListener('mouseenter', changeColor)
  })
}

function removeHoverEvent() {
  gridBlocks.forEach((gridBlock) => {
    gridBlock.removeEventListener('mouseenter', changeColor)
  })
}

// This function is used to temporarily remove the hover event handler
function tempRemoveHoverEvent() {
  const shiftKeyHandler = window.addEventListener('keydown', (e) => {
    if (e.key === 'Shift') {
      removeHoverEvent();
    }
  })
}

function addHoverEventAgain() {
  const shiftKeyHandler = window.addEventListener('keyup', (e) => {
    console.log(e);
    if (e.key === 'Shift') {
      addHoverEvent();
    }
  });
}

// Main driver function calls
tempRemoveHoverEvent();
addHoverEventAgain();
