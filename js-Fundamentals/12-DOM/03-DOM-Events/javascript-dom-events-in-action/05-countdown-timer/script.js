//

const getDaysElement = document.getElementById("days");
const getHoursElement = document.getElementById("hours");
const getMinutesElement = document.getElementById("minutes");
const getSecondsElement = document.getElementById("seconds");

// end date of the timer
const endDate = "Dec 31 2024";

const countDownTimer = () => {
  const timerEndDate = new Date(endDate).getTime();
  const currentDate = new Date().getTime();

  const remainingTimeInterval = timerEndDate - currentDate;

  const remainingDays = Math.floor(remainingTimeInterval / (1000 * 3600 * 24));
  const remainingHours = Math.floor(
    (remainingTimeInterval % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const remainingMinutes = Math.floor(
    (remainingTimeInterval % (1000 * 60 * 60)) / (1000 * 60)
  );
  const remainingSeconds = Math.floor(
    (remainingTimeInterval % (1000 * 60)) / 1000
  );
  //console.log("Current Date:", currentDate, "End Date: ",timerEndDate, "Remaining Interval: ",remainingTimeInterval, "Remaining Days: ",remainingDays);

  getDaysElement.innerHTML = remainingDays;
  getHoursElement.innerHTML = formatTime(remainingHours);
  getMinutesElement.innerHTML = formatTime(remainingMinutes);
  getSecondsElement.innerHTML = formatTime(remainingSeconds);
};

// Formatting the Time - Formatting the time and adding zero if it is below 10
function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

// display the timer every second
setInterval(() => {
  countDownTimer();
}, 1000);
