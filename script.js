const containerEl = document.querySelector(".container");
// containerEl.remove();
const CONTAINER_WIDTH = 529;


// Create 16*16 grid of squares divs
const numberOfSquare = 16;
for (let j = 0; j < numberOfSquare; j++) {
    for (let i = 0; i < numberOfSquare; i++) {
        let squareEl = document.createElement("div");
        squareEl.style.width = CONTAINER_WIDTH/numberOfSquare + "px";
        squareEl.style.height = CONTAINER_WIDTH/numberOfSquare + "px";
        squareEl.classList.add("grid");
        containerEl.appendChild(squareEl);
    
    }
}

// Add button to ask number of squares
const btnAskSquaresNumberEl = document.createElement("button");
btnAskSquaresNumberEl.textContent = 'Select Squares';
const bodyEl = document.querySelector("body");
bodyEl.insertBefore(btnAskSquaresNumberEl, containerEl);
btnAskSquaresNumberEl.addEventListener('click', () => {
    let numberOfSquare = prompt("How many Squares?");
    while (numberOfSquare > 100 || numberOfSquare < 1) {
        numberOfSquare = prompt("Please enter a number between 1 and 100?");
    }
    containerEl.replaceChildren();
    for (let j = 0; j < numberOfSquare; j++) {
        for (let i = 0; i < numberOfSquare; i++) {
            let squareEl = document.createElement("div");
            squareEl.style.width = CONTAINER_WIDTH/numberOfSquare + "px";
            squareEl.style.height = CONTAINER_WIDTH/numberOfSquare + "px";
            squareEl.classList.add("grid");
            containerEl.appendChild(squareEl);
        
        }
    }
})

/*



*/