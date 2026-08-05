const gameBoardTiles = document.querySelectorAll('.game-board-tile');

const clearButton = document.getElementById('clearButton');
const populateButton = document.getElementById('populateButton');

clearButton.addEventListener('click', clearBoard);
populateButton.addEventListener('click', populateBoard);

// add styling

function styleTiles() {

    gameBoardTiles.forEach(tile => {

        if (tile.children[0].innerText === '') {
            tile.classList.remove('tile-2', 'tile-4', 'tile-8', 'tile-16', 'tile-32', 'tile-64', 'tile-128-plus');
        }
        else if (tile.children[0].innerText === '2') {
            tile.classList.add('tile-2');
        }
        else if (tile.children[0].innerText === '4') {
            tile.classList.add('tile-4');
        }
        else if (tile.children[0].innerText === '8') {
            tile.classList.add('tile-8');
        }
        else if (tile.children[0].innerText === '16') {
            tile.classList.add('tile-16');
        }
        else if (tile.children[0].innerText === '32') {
            tile.classList.add('tile-32');
        }
        else if (tile.children[0].innerText === '64') {
            tile.classList.add('tile-64');
        }
        else if (tile.children[0].innerText === '128') {
            tile.classList.add('tile-128-plus');
        }
        else if (+tile.children[0].innerText > 128) {
            tile.classList.add('tile-128-plus');
        }
    });

}

function clearBoard() {

    console.log('Clearing the board...');

    gameBoardTiles.forEach(tile => {
        if (tile.children[0].innerText) {
            tile.children[0].innerText = '';
        }
    });

    styleTiles();

}

// shiftBoard(direction)

// function shiftBoard(direction) {
//     console.log(direction);
// }

// populateBoard(num of tiles)
// check if num of tiles > 16
// then iterate through tiles, randomly adding values until you've added enough

function populateBoard(numTiles) {
    if (numTiles > 16) return;

    console.log('Populating the board...')
}

styleTiles()


// working on keystrokes

document.addEventListener('keydown', keyPress => arrowKeyInput(keyPress));

function arrowKeyInput(keyPress) {

    if (!['ArrowDown', 'ArrowUp', 'ArrowRight', 'ArrowLeft'].includes(keyPress.key)) return;

    // console.log(keyPress.key);

    // switch 

    shiftBoard()



}