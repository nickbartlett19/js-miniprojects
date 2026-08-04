const gameBoardTiles = document.querySelectorAll('.game-board-tile');

const clearButton = document.getElementById('clearButton');

clearButton.addEventListener('click', clearBoard);

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

// clearBoard()
// iterate each tile, if innerText, remove it

function clearBoard() {

    console.log('Clearing the board...');

    gameBoardTiles.forEach(tile => {
        if (tile.children[0].innerText) {
            tile.children[0].innerText = '';
        }
    });

    styleTiles();
}

// populateBoard(num of tiles)
// check if num of tiles > 16
// then iterate through tiles, randomly adding values until you've added enough

styleTiles()