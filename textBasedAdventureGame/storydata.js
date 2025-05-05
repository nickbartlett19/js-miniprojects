// story stages

const s009 = {
    body: "You open the door, to find a stairwell leading to the open road. Congratulations! You have escaped the tower of Galtha.", 
    opt1: {body: "", ptr: undefined},
    opt2: {body: "", ptr: undefined},
    opt3: {body: "", ptr: undefined}
}

const s008 = {
    body: "You chose the yellow door. Behind it, you find a stained glass window, and an ornate ivory door.", 
    opt1: {body: "Open the ivory door", ptr: s009},
    opt2: {body: "Admire the glass.", ptr: undefined},
    opt3: {body: "", ptr: undefined}
}

const s007 = {
    body: "You chose the white door. Behind it, you find an altar to the god of war, and a polished oak door.", 
    opt1: {body: "Open the oak door.", ptr: s009},
    opt2: {body: "Inspect the altar.", ptr: undefined},
    opt3: {body: "", ptr: undefined}
}

const s006 = {
    body: "You chose the black door. Behind it, you find an passageway blocked by debris, and a polished iron door.", 
    opt1: {body: "Open the iron door.", ptr: s009},
    opt2: {body: "Kick the debris.", ptr: undefined},
    opt3: {body: "", ptr: undefined}
}

const s005 = {
    body: "You chose the blue door. Behind it, you find an open balcony overlooking the castle grounds, and a polished bronze door.", 
    opt1: {body: "Open the bronze door.", ptr: s009},
    opt2: {body: "Look out on the balcony.", ptr: undefined},
    opt3: {body: "", ptr: undefined}
}

const s003_rdt = {
    body: "You grab the pearls. You see a white door, a yellow door, and a blocked passageway.", 
    opt1: {body: "White door.", ptr: s007},
    opt2: {body: "Yellow door.", ptr: s008},
    opt3: {body: "Neither", ptr: undefined}
}

const s003 = {
    body: "You chose the green door. Behind it, you find a white door, a yellow door, and a blocked passageway. Above the blocked passageway is a bag of pearls.", 
    opt1: {body: "White door.", ptr: s007},
    opt2: {body: "Yellow door.", ptr: s008},
    opt3: {body: "Grab the pearls", ptr: s003_rdt}
}

const s002_rdt = {
    body: "You collect the gold. There is a blue door and a black door, and a blocked passageway. Choose one to open.", 
    opt1: {body: "Blue door.", ptr: s005},
    opt2: {body: "Black door.", ptr: s006},
    opt3: {body: "Neither.", ptr: undefined}
}

const s002 = {
    body: "You chose the red door. Behind it, you find a blue door, a black door, and a blocked passageway. Above the blocked passageway is a pouch of gold florins.", 
    opt1: {body: "Blue door.", ptr: s005},
    opt2: {body: "Black door.", ptr: s006},
    opt3: {body: "Grab the gold florins.", ptr: s002_rdt}
}

const s001 = {
    body: "There is a red door and a green door. Choose one to open.", 
    opt1: {body: "Red door.", ptr: s002},
    opt2: {body: "Green door.", ptr: s003},
    opt3: {body: "Neither.", ptr: undefined}
}

// default screen
const s000 = {
    body: "Default screen.", 
    opt1: {body: "Default opt1.", ptr: undefined},
    opt2: {body: "Default opt2.", ptr: undefined},
    opt3: {body: "Default opt3.", ptr: undefined}
}

