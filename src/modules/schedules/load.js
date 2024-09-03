import { hoursLoad } from "../form/hours-load.js";

const selectedDate = document.getElementById("date");
export function schedulesDay() {
  // Render availabel hours
  hoursLoad({ date: selectedDate.value });
}
