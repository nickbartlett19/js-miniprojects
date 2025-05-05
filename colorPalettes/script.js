const HEX_DIGITS = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];

function getHexColor() {
    let hexColor = '';
    for (let i = 0; i < 8; i++) {
        let num = getRandInt(0,15);
        hexColor += HEX_DIGITS[num];
    }
    return hexColor;
}

function getRandInt(min, max) {
    return Math.floor(Math.random()*(max-min) + min)
}

console.log(getHexColor());

const rectangles = document.querySelectorAll(".rectangle");

const button = document.querySelector("button");

button.addEventListener('click', clickButton)

// rectangles.forEach((rectangle) => console.log(rectangle));

function clickButton() {

    for (let i = 0; i < 5; i++) {
        let color = getHexColor();
        color = '#' + color;
        rectangles[i].style.backgroundColor = color;
    }
    
}