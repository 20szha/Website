const textElement = document.getElementById('word_change');
const texts = ["<strong>Susan Zhang</strong>", "<strong>An Electrical Engineer</strong>", "<strong>An Avid Scholar</strong>", "<strong >A Systems Engineer</strong >"];

let index = 0;

function changeText() {
    textElement.innerHTML = texts[index];
    index = (index + 1) % texts.length;
}
changeText();
setInterval(changeText, 1500);
