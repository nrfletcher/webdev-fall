const button = document.getElementById('button');
const text = document.getElementById('changer');
const section = document.getElementById('test');
const buttonSection = document.getElementById('buttonSection');

console.log(button);

button.addEventListener('click', () => {
    console.log('clicked');
    text.textContent = 'whatever';
    console.log(section.childNodes);
    const element = document.createElement('p');
    element.textContent = 'is this working?';
    section.appendChild(element);
});

const contentButton = document.getElementById('contentbutton');
contentButton.addEventListener('click', () => {
    console.log('test');
    const textField = document.getElementById('in');
    let text = textField.value;
    let element = document.createElement('p');
    element.textContent = text;
    console.log(textField);
    buttonSection.append(element);
    textField.value = '';
});

console.log(section);

async function fetchText() {
    let response = await fetch('test.txt');
    let data = await response.text();
    console.log(data);
}

// Make a function that can send and receive data from a .txt file

fetchText();
