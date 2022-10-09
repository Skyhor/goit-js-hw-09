const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
const body = document.querySelector('body');
console.log(body);
startBtn.addEventListener('click', ChangColorOnClick);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
function ChangColorOnClick() {
  console.log('123');
}
