import { schedulesDay } from "./load.js";
import { cancelAppointment } from "../../services/cancel-appointment.js";

const periods = document.querySelectorAll(".period");

periods.forEach((period) => {
  period.addEventListener("click", async (event) => {
    if (event.target.classList.contains("cancel-icon")) {
      const item = event.target.closest("li");
      const { id } = item.dataset;

      if (id) {
        const confirmed = confirm(
          "Are you sure you want to cancel this appointment?"
        );

        if (confirmed) {
          await cancelAppointment({ id });
          await schedulesDay();
        }
      }
    }
  });
});
