const ref = {
  startBtn: document.querySelector('[data-start]'),
  stopBtn: document.querySelector('[data-stop]'),
  body: document.querySelector('body'),
};
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
ref.startBtn.addEventListener('click', () => {
  ref.startBtn.disabled = true;
  timerId = setInterval(() => {
    document.body.style.background = getRandomHexColor();
  }, 1000);
});

ref.stopBtn.addEventListener('click', () => {
  ref.startBtn.disabled = false;
  clearInterval(timerId);
});
