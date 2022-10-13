const ref = {
  startBtn: document.querySelector('[data-start]'),
  stopBtn: document.querySelector('[data-stop]'),
  body: document.querySelector('body'),
};
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
ref.startBtn.addEventListener('click', () => {
  timer = setInterval(() => {
    document.body.style.background = getRandomHexColor();
  }, 1000);
  ref.startBtn.disabled = true;
});

ref.stopBtn.addEventListener('click', () => {
  clearInterval(timer);
  ref.startBtn.disabled = false;
});
