const timeElement = document.getElementById("time");
const dateElement = document.getElementById("date");

const weekdays = [
  "일요일",
  "월요일",
  "화요일",
  "수요일",
  "목요일",
  "금요일",
  "토요일"
];

function updateClock() {
  const now = new Date();

  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  const day = now.getDate();

  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");

  const weekday = weekdays[now.getDay()];

  timeElement.textContent = `${hours}:${minutes}`;

  dateElement.textContent =
    `${year}년 ${month}월 ${day}일 · ${weekday}`;
}

updateClock();

setInterval(updateClock, 1000);