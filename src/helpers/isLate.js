// isLate.js

import moment from "moment";

// by convention, composable function names start with "use"
export function useIsLate(dueDate, period = "weekly", comparingDate = null) {
  let now = moment().endOf("day");

  let secondDate = comparingDate ? moment(comparingDate) : now;

  const initialDate = moment(dueDate);

  let isLate = initialDate.isBefore(secondDate);

  let isLateMessage = null;

  let measure, esPeriodSing, esPeriodPlur, icon, color;

  color = "negative";

  icon = "assignment_late";

  if (isLate) {
    let diff = initialDate.diff(secondDate, "hours");

    if (diff == 0) {
      isLateMessage = `Fecha limite de pago hoy`;
      color = "amber-10";

      icon = "schedule";

      return { isLate, isLateMessage, icon, color };
    }

    switch (period) {
      case "monthly":
        measure = "monthly";
        esPeriodSing = "mes";
        esPeriodPlur = "meses";
        break;

      default:
        measure = "weeks";
        esPeriodSing = "semana";
        esPeriodPlur = "semanas";
        break;
    }

    diff = initialDate.diff(secondDate, "days");

    esPeriodSing = "dia";
    esPeriodPlur = "dias";

    isLateMessage = `Atrasado: ${diff * -1}, ${
      diff == -1 ? esPeriodSing : esPeriodPlur
    } `;
  }

  return { isLate, isLateMessage, icon, color };
}
