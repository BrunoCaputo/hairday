import dayjs from "dayjs";
import { apiConfig } from "./api-config";

export async function fetchAppointmentByDay({ date }) {
  try {
    const response = await fetch(`${apiConfig.baseUrl}/schedules`);

    const data = await response.json();

    const dailyAppointments = data.filter((appointment) =>
      dayjs(date).isSame(appointment.when, "day")
    );

    return dailyAppointments;
  } catch (error) {
    console.error(error);
    alert("Failed to fetch appointments! Please try again later.");
  }
}
