import dayjs from "dayjs";

const form = document.querySelector("form");
const selectedDate = document.getElementById("date");

// Current date
const todayDate = dayjs(new Date()).format("YYYY-MM-DD");

// Loads current date
selectedDate.value = todayDate;

// Minimum date to select
selectedDate.min = todayDate;

form.onsubmit = (event) => {
  event.preventDefault();
};
