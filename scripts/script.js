let gridSize = 20;
const flexContainer = document.querySelector(".flex-container");
const resetButton = document.querySelector("#reset-button");

function createGridBoard() {
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
}

// This function is used to change the colour of the grid boxes on hover.
function changeColor(e) {
  this.style.backgroundColor = "#F6D167";
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

// This event handler is used to temporarily remove the hover event handler
window.addEventListener('keydown', (e) => {
    if (e.key === 'Shift') {
      removeHoverEvent();
    }
  });

// This event handler is used to readd the hover event for the grid boxes.
window.addEventListener('keyup', (e) => {
    console.log(e);
    if (e.key === 'Shift') {
      addHoverEvent();
    }
  });


resetButton.addEventListener('click', () => {
  gridBlocks.forEach((gridBlock) => {
    gridBlock.style.backgroundColor = "white";
  })
})

// Main driver function calls
createGridBoard();
const gridBlocks = document.querySelectorAll(".grid-box");
addHoverEvent();
// tempRemoveHoverEvent();
// addHoverEventAgain();
