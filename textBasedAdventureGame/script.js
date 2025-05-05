// todo
// 1. polish styling and layout
// 2. set up better ways to access story data and develop the story without getting overwhelmed

class GameStage {
    constructor(storyObject) {
        this.text = storyObject.body;

        this.option1 = storyObject.opt1;
        this.option2 = storyObject.opt2;
        this.option3 = storyObject.opt3;
    }
}

// ========================================================

// load HTML elements
const screenBox = document.querySelector(".screen-box");
const screenText = document.querySelector(".screen-text");
const optionBoxes = Array.prototype.slice.call(document.querySelectorAll(".option-box"));

function updateGameDisplay(gameStage, screenText, optionBoxes) {
    screenText.innerText = gameStage.text;

    optionBoxes[0].innerText = gameStage.option1.body;
    optionBoxes[1].innerText = gameStage.option2.body;
    optionBoxes[2].innerText = gameStage.option3.body;

    optionBoxes[0].data = gameStage.option1;
    optionBoxes[1].data = gameStage.option2;
    optionBoxes[2].data = gameStage.option3;

}

function gameStep(option) {
    let storyData = option.data.ptr;

    if (storyData === undefined) {
        return;
    }

    let currGameStage = new GameStage(storyData)
    updateGameDisplay(currGameStage, screenText, optionBoxes);
}

const firstGameStage = new GameStage(s001);
updateGameDisplay(firstGameStage, screenText, optionBoxes);

optionBoxes.forEach((box) => {
    box.addEventListener(('click'), (e) => gameStep(box))
});