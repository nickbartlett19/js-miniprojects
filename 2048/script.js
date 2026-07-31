const gameBoardTiles = document.querySelectorAll(".game-board-tile");

// console.log(gameBoardTiles);

// console.log(gameBoardTiles[0].children);

gameBoardTiles.forEach(tile => {

    if (tile.children[0].innerText === '2') {
        console.log('change color')
    }

    // console.log(tile.children[0].innerText);
});
// console.log('test');