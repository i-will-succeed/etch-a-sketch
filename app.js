const grid = document.querySelector('.grid-container')
const square = document.querySelector('.grid-squares');

square.textContent = 'D'

gridSize = prompt("Size of grid?");
grid.style.cssText = `grid-template-columns: repeat(${gridSize}, 1fr); grid-template-rows: repeat(${gridSize}, 1fr)`;