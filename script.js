const gridButton = document.querySelector('button');
gridButton.addEventListener('click', e => createGrid(setUpGrid(prompt('Enter the number of squares per side of the grid.'))));

function setUpGrid(input) {
    document.body.removeChild(document.querySelector('div'));
    if (input > 100) return 100;
    return Number(input);
}

function createGrid(gridSize) {
    const gridContainer = document.createElement('div');
    gridContainer.setAttribute('class', 'grid-container');
    document.body.appendChild(gridContainer);

    for (let i = 0; i < gridSize; i++) {
        const row = document.createElement('div');
        row.setAttribute('class', 'row');
        gridContainer.appendChild(row);
    
        for (let j = 0; j < gridSize; j++) {
            const square = document.createElement('div');
            square.setAttribute('class', 'square');
            row.appendChild(square);
        }
    }
}

createGrid();

let mouseUp = true;

document.addEventListener('mousedown', e => mouseUp = false);

document.addEventListener('mouseup', e => mouseUp = true);

document.addEventListener('mouseover', e => {
    if (e.target.getAttribute('class') === 'square' && !mouseUp) {
            e.target.style.backgroundColor = 'black';
    }
});
