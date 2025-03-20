export interface RoutineTranslations {
  routine_title: string;
  routine_noRoutine: string;
  routine_deleteRoutine: string;
  routine_addRoutine: string;
  days: string[];
}

export const defaultRoutineTranslations: RoutineTranslations = {
  routine_title: "routine_title",
  routine_noRoutine: "routine_noRoutine",
  routine_deleteRoutine: "routine_deleteRoutine",
  routine_addRoutine: "routine_addRoutine",
  days: ["day_1", "day_2", "day_3", "day_4", "day_5", "day_6", "day_7"],
};

export const routineTranslations: Record<"es" | "en", RoutineTranslations> = {
  es: {
    routine_title: "Rutina",
    routine_noRoutine: "No hay rutina asignada",
    routine_deleteRoutine: "Eliminar Rutina del Día",
    routine_addRoutine: "Agregar Rutina",
    days: ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"],
  },
  en: {
    routine_title: "Routine",
    routine_noRoutine: "No routine assigned",
    routine_deleteRoutine: "Delete Day Routine",
    routine_addRoutine: "Add Routine",
    days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
  },
};
