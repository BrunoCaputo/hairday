import dayjs from "dayjs";

const periodMorning = document.getElementById("period-morning");
const periodAfternoon = document.getElementById("period-afternoon");
const periodNight = document.getElementById("period-night");

export function showAppointments({ dailyAppointments }) {
  try {
    periodMorning.innerHTML = "";
    periodAfternoon.innerHTML = "";
    periodNight.innerHTML = "";

    dailyAppointments.forEach((appointment) => {
      const item = document.createElement("li");
      const time = document.createElement("strong");
      const name = document.createElement("span");

      item.setAttribute("data-id", appointment.id);
      time.textContent = dayjs(appointment.when).format("HH:mm");
      name.textContent = appointment.name;

      const cancelIcon = document.createElement("img");
      cancelIcon.classList.add("cancel-icon");
      cancelIcon.setAttribute("src", "./src/assets/icons/cancel.svg");
      cancelIcon.setAttribute("alt", "Cancel appointment icon");

      item.append(time, name, cancelIcon);

      const hour = dayjs(appointment.when).hour();

      if (hour <= 12) {
        periodMorning.appendChild(item);
      } else if (hour > 12 && hour < 18) {
        periodAfternoon.appendChild(item);
      } else {
        periodNight.appendChild(item);
      }
    });
  } catch (error) {
    console.error(error);
    alert("Failed to show the appointments! Try again later.");
  }
}
