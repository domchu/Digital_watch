function getTime() {
  let userHour = document.querySelector(".hour");
  let userMin = document.querySelector(".minute");
  let userSec = document.querySelector(".sec");
  let userAmPm = document.querySelector(".am-pm");
  let dayDate = document.querySelector(".day-date");
  let dayMonth = document.querySelector(".day-month");
  let dayYear = document.querySelector(".day-year");
  let dayName = document.querySelector(".day-name");
  let today = new Date();
  let am_pm;
  let hour = today.getHours();
  let min = today.getMinutes();
  let secs = today.getSeconds();
  let month = today.getMonth() + 1; // get the year is also an array
  let currentYear = today.getFullYear();
  let currentDate = today.getDate();
  let currentDay;
  // using the switch cases to get the days of the week and is an array of numbers.
  switch (today.getDay()) {
    case 0:
      currentDay = "SUNDAY";
      break;
    case 1:
      currentDay = "MONDAY";
      break;
    case 2:
      currentDay = "TUESDAY";
      break;
    case 3:
      currentDay = "WEDNESDAY";
      break;
    case 4:
      currentDay = "THURSDAY";
      break;
    case 5:
      currentDay = "FRIDAY";
      break;
    case 6:
      currentDay = "SATURDAY";
      break;

    default:
      break;
  }
  // using the ternary operation to write the control structure.
  am_pm = hour > 12 ? "PM" : "AM";
  hour = hour > 12 ? `${hour - 12}` : `${hour}`;
  hour = hour < 10 ? "0" + `${hour}` : `${hour}`;
  min = min < 10 ? "0" + `${min}` : `${min}`;
  secs = secs < 10 ? "0" + `${secs}` : `${secs}`;
  currentDate = currentDate < 10 ? "0" + `${currentDate}` : `${currentDate}`;
  month = month < 10 ? "0" + `${month}` : `${month}`;

  userHour.textContent = hour;
  userMin.textContent = min;
  userSec.textContent = secs;
  userAmPm.textContent = am_pm;
  dayDate.textContent = currentDate;
  dayMonth.textContent = month;
  dayName.textContent = currentDay;
  dayYear.textContent = currentYear;
}

setInterval(() => {
  getTime();
}, 1000);
