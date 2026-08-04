const gameBoardTiles = document.querySelectorAll(".game-board-tile");

gameBoardTiles.forEach(tile => {

    if (tile.children[0].innerText === '2') {
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