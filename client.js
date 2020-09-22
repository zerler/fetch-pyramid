const wordBox = document.querySelector('#word');
const outputBox = document.querySelector('.output');
const button = document.querySelector('button');
const form = document.querySelector('.p-form');

const POST_URL = 'http://localhost:3000/pyramid';

const updateOutput = res => {
    let output = '';
    for (let i = 0; i < res['pairs'].length; i++)
        output += `${res['pairs'][i][0]}: ${res['pairs'][i][1]}\n`;
    outputBox.value = output;

    const color = res['isPyramid'] ? '#b2ec8b' : '#fd6a65';
    outputBox.style.background = color;
};

const sendWord = (e) => {
    e.preventDefault();

    const word = wordBox.value;
    const data = { word };
    fetch(POST_URL, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: { 'content-type': 'application/json' }
    })
    .then(response => response.json())
    .then(json => updateOutput(json))
    .catch(err => console.log(err));
};

form.addEventListener("submit", sendWord);
