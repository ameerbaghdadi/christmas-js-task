const today = new Date();
const christmasDay = new Date(today.getFullYear(), 11, 25);

if (today.getMonth() == 11 && today.getDate() > 25) {
    christmasDay.setFullYear(christmasDay.getFullYear() + 1);
}

const msPerOneDay = 24 * 60 * 60 * 1000;

const timeLeft = (christmasDay.getTime() - today.getTime());
const exDaysLeft = timeLeft / msPerOneDay;
const daysLeft = Math.floor(exDaysLeft);
const exHoursLeft = (exDaysLeft - daysLeft) * 24;
const hoursLeft = Math.floor(exHoursLeft);
const minsLeft = Math.floor((exHoursLeft - hoursLeft) * 60);

console.log(timeLeft);

document.write("Numbers of days left:<br> <h3>" + daysLeft + " days " + hoursLeft + " hours and " + minsLeft + " minutes left </h3> Until December 25th 2023");