import { apiConfig } from "./api-config";

export async function newAppointment({ id, name, when }) {
  try {
    await fetch(`${apiConfig.baseUrl}/schedules`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id, name, when }),
    });

    alert("Scheduling completed successfully!");
  } catch (error) {
    console.error(error);
    alert("Sorry! Cannot schedule your appointment. Please try again later!");
  }
}
