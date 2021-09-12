let gridSize = 20;
let changeGridColor = "#F6D167";
const mainBoard = document.querySelector(".main-board");
const flexContainer = document.querySelector(".flex-container");
const resetButton = document.querySelector("#reset-button");
const settingsMenu = document.querySelector(".settings-icon");
const exitSettings = document.querySelector(".exit-settings-button");
const gridSizeDisplay = document.querySelector(".grid-size-display");
const gridSizeSlider = document.querySelector("#grid-size");
const colorPicker = document.querySelector(".color-picker");
let gridBlocks = null;


// Flag counters
let changeGridFlag = false;

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
  gridBlocks = document.querySelectorAll(".grid-box");
  addHoverEvent(gridBlocks);
}

function deleteGridBoard() {
  while (flexContainer.firstChild) {
    flexContainer.removeChild(flexContainer.firstChild);
  }
}

// This function is used to change the colour of the grid boxes on hover.
function changeColor(e) {
  this.style.backgroundColor = changeGridColor;
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
    if (e.key === 'Shift') {
      addHoverEvent();
    }
  });


resetButton.addEventListener('click', () => {
  gridBlocks.forEach((gridBlock) => {
    gridBlock.style.backgroundColor = "white";
  })
});

settingsMenu.addEventListener('click', settingsDisplay);

function settingsDisplay() {
  document.querySelector("#settings-div").classList.remove("hide");
  gridSizeDisplay.textContent = `${gridSize} x ${gridSize}`;

}

exitSettings.addEventListener('click', () => {
  document.querySelector("#settings-div").classList.add("hide");
  if (changeGridFlag) {
    changeGridFlag = false;
    deleteGridBoard();
    createGridBoard();
  }
})

gridSizeSlider.addEventListener("input", (e) => {
  if (!(gridSize === e.target.value)) {
    gridSize = e.target.value;
    gridSizeDisplay.textContent = `${gridSize} x ${gridSize}`;
    changeGridFlag = true;
  }
});

colorPicker.addEventListener("change", (e) => {
  changeGridColor = e.target.value;
})

// Main driver function calls
createGridBoard();
// tempRemoveHoverEvent();
// addHoverEventAgain();
