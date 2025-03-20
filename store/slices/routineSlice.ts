import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Exercise {
  name: string;
  sets: string;
}

interface RoutineDay {
  dayId: number;
  muscleGroup: string | null;
  exercises: Exercise[];
}

const initialState: RoutineDay[] = [
  { dayId: 1, muscleGroup: null, exercises: [] },
  { dayId: 2, muscleGroup: null, exercises: [] },
  { dayId: 3, muscleGroup: null, exercises: [] },
  { dayId: 4, muscleGroup: null, exercises: [] },
  { dayId: 5, muscleGroup: null, exercises: [] },
  { dayId: 6, muscleGroup: null, exercises: [] },
  { dayId: 7, muscleGroup: null, exercises: [] },
];

const routineSlice = createSlice({
  name: "routine",
  initialState,
  reducers: {
    setRoutineDay: (
      state,
      action: PayloadAction<{ dayId: number; muscleGroup: string; exercises: Exercise[] }>
    ) => {
      const { dayId, muscleGroup, exercises } = action.payload;
      const dayIndex = state.findIndex((d) => d.dayId === dayId);
      if (dayIndex !== -1) {
        state[dayIndex].muscleGroup = muscleGroup;
        state[dayIndex].exercises = exercises;
      }
    },

    clearRoutineDay: (state, action: PayloadAction<number>) => {
      const dayIndex = state.findIndex((d) => d.dayId === action.payload);
      if (dayIndex !== -1) {
        state[dayIndex].muscleGroup = null;
        state[dayIndex].exercises = [];
      }
    },
  },
});

export const { setRoutineDay, clearRoutineDay } = routineSlice.actions;
export default routineSlice.reducer;
