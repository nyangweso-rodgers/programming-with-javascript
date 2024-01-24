const getYearElement = document.getElementById("year");
const getMonthElement = document.getElementById("month");
const getDayElement = document.getElementById("day");
const getHoursElement = document.getElementById("hour");
const getMinutesElement = document.getElementById("minute");
const getSecondsElement = document.getElementById("seconds");

const displayDateAndTime = () => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const currentDate = new Date();

  const getYear = currentDate.getFullYear();
  const getMonth = months[currentDate.getMonth()];
  const getDate = currentDate.getDate();
  const getHours = currentDate.getHours();
  const getMinutes = currentDate.getMinutes();
  const getSeconds = currentDate.getSeconds();

  getYearElement.innerHTML = getYear;
  getMonthElement.innerHTML = getMonth;
  getDayElement.innerHTML = getDate;
  getHoursElement.innerHTML = getHours;
  getMinutesElement.innerHTML = getMinutes;
  getSecondsElement.innerHTML = getSeconds;
};

setInterval(() => {
  displayDateAndTime();
}, 1000);
