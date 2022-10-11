import flatpickr from 'flatpickr';
// Дополнительный импорт стилей
import 'flatpickr/dist/flatpickr.min.css';

const btnStart = document.querySelector('button[data-start]');
const dateInput = document.querySelector('#datetime-picker');
const day = document.querySelector('[data-days]');
const hour = document.querySelector('[data-hours]');
const minut = document.querySelector('[data-minutes]');
const second = document.querySelector('[data-seconds]');

let timer = null;

btnStart.disabled = true;

//flatpickr
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] <= new Date()) {
      btnStart.disabled = true;
      Notiflix.Notify.failure('Please choose a date in the future');
    } else {
      btnStart.disabled = false;
      btnStart.addEventListener('click', countdownTime);

      function countdownTime() {
        timer = setInterval(() => {
          btnStart.disabled = true;

          const dateChoosenMs = new Date(
            dateInput.value.replace(/-/g, '/')
          ).getTime();
          const now = new Date().getTime();
          const timeLeft = dateChoosenMs - now;

          const { days, hours, minutes, seconds } = convertMs(timeLeft);

          day.innerHTML = days < 10 ? addLeadingZero(days) : days;
          hour.innerHTML = hours < 10 ? addLeadingZero(hours) : hours;
          minut.innerHTML = minutes < 10 ? addLeadingZero(minutes) : minutes;
          second.innerHTML = seconds < 10 ? addLeadingZero(seconds) : seconds;

          if (timeLeft < 1000) {
            clearInterval(timer);
            btnStart.disabled = false;
          }
        }, 1000);
      }
      function addLeadingZero(value) {
        const stringValue = String(value);
        return stringValue.padStart(2, '0');
      }
      function convertMs(ms) {
        const second = 1000;
        const minute = second * 60;
        const hour = minute * 60;
        const day = hour * 24;

        const days = Math.floor(ms / day);
        const hours = Math.floor((ms % day) / hour);
        const minutes = Math.floor(((ms % day) % hour) / minute);
        const seconds = Math.floor((((ms % day) % hour) % minute) / second);

        return { days, hours, minutes, seconds };
      }
    }
  },
};

flatpickr(dateInput, options);
