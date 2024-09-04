import { hoursLoad } from "../form/hours-load.js";
import { fetchAppointmentByDay } from "../../services/fetch-appointment-by-day.js";
import { showAppointments } from "./show.js";

const selectedDate = document.getElementById("date");
export async function schedulesDay() {
  const date = selectedDate.value;

  const dailyAppointments = await fetchAppointmentByDay({
    date,
  });

  showAppointments({ dailyAppointments });

  // Render available hours
  hoursLoad({ date });
}
