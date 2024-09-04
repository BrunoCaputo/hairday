import dayjs from "dayjs";

import { newAppointment } from "../../services/new-appointment.js";

const form = document.querySelector("form");
const clientName = document.getElementById("client");
const selectedDate = document.getElementById("date");

// Current date
const todayDate = dayjs(new Date()).format("YYYY-MM-DD");

// Loads current date
selectedDate.value = todayDate;

// Minimum date to select
selectedDate.min = todayDate;

form.onsubmit = async (event) => {
  event.preventDefault();

  try {
    const name = clientName.value.trim();

    if (!name) {
      return alert("Please enter the client's name");
    }

    const hourSelected = document.querySelector(".hour-selected");

    if (!hourSelected) {
      return alert("Please select a schedule time");
    }

    const [hour] = hourSelected.innerText.split(":");

    const appointmentTime = dayjs(selectedDate.value).add(hour, "hour");

    const id = new Date().getTime();

    await newAppointment({
      id,
      name,
      when: appointmentTime,
    });
  } catch (error) {
    alert("Sorry! Something went wrong with your schedule. Please try again!");
    console.error(error);
  }
};
