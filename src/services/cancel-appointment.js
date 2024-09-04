import { apiConfig } from "./api-config.js";

export async function cancelAppointment({ id }) {
  try {
    await fetch(`${apiConfig.baseUrl}/schedules/${id}`, {
      method: "DELETE",
    });

    alert("Appointment canceled successfully!");
  } catch (error) {
    console.error(error);
    alert("Sorry! Cannot cancel your appointment. Please try again later!");
  }
}
