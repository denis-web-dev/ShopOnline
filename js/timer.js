
// const endDate = new Date();
// endDate.setDate(endDate.getDate() + 3); // например, 3 дня от текущей даты

const endDate = new Date('Sep 21, 2024, 23:59:59');


const daysElement = document.querySelector('#days');
const minutesElement = document.querySelector('#minutes');
const hoursElement = document.querySelector('#hours');


let timerInterval;

function updateTimer() {
  const now = new Date();
  const timeDifference = endDate - now;

  if (timeDifference <= 0) {
    daysElement.innerText = '0';
    hoursElement.innerText = '0';
    minutesElement.innerText = '0';
    clearInterval(timerInterval);
    return;
  }

  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor(
    (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
  );

  daysElement.innerText = days;
  hoursElement.innerText = hours;
  minutesElement.innerText = minutes;
}

updateTimer(); // Запускаем таймер при загрузке странице
timerInterval = setInterval(updateTimer, 1000); // Обновляем таймер каждую секунду
