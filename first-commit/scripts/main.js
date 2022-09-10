const myImage = document.querySelector('img');

myImage.onclick = () => {
    const mySrc = myImage.getAttribute('src');
    if(mySrc == 'images/logo.png') {
        myImage.setAttribute('src', 'images/logo2.png');
    } else {
        myImage.setAttribute('src', 'images/logo.png');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    const myName = prompt('Please enter your name');
    localStorage.setItem('name', myName);
    myHeading.textContent = `Riley is cool, ${myName}`;
}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    const storedName = localStorage.getItem('name');
    myHeading.textContent = `Riley is cool, ${storedName}`;
}

myButton.onclick = () => {
    setUserName();
}