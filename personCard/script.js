class Person {
    constructor(name, bio, birthday) {
        this.name = name;
        this.bio = bio;
        this.birthday = birthday;
    }

    getAge() {
        let now = new Date(), birthday = new Date(this.birthday);
        // get difference between now and this.birthday in milliseconds, convert to years
        return Math.floor((now-birthday)/(1000*60*60*24*365));
    }
}

/* todo: 
1. improving naming and modularity of myFunction()
2. research control flow of javascript programs ... IIFE relevant? */


const personCardGrid = document.querySelector('.person-card-grid');

function myFunction() {
    event.preventDefault();

    let newPerson = document.createElement('div')
    let cardImage = document.createElement('img')
    let personName = document.createElement('p');
    let personBio = document.createElement('p');
    let personBDay= document.createElement('p');

    newPerson.className = "person-card";

    cardImage.src = "img/head.jpg";
    cardImage.className = "person-head";

    personName.innerText = "Name: " + this.userName.value;
    personBio.innerText = "Bio: " + this.userBio.value;
    personBDay.innerText = "Birthday: " + this.userBDay.value;

    newPerson.appendChild(cardImage);
    newPerson.appendChild(personName);
    newPerson.appendChild(personBio);
    newPerson.appendChild(personBDay);

    personCardGrid.appendChild(newPerson);

}