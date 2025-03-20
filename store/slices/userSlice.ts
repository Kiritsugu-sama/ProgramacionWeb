import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  email: string | null;
  nombreCompleto: string;
  edad: number | null;
  sexo: string;
  estadoCivil: string;
  token: string | null;
}

const initialState: UserState = {
  email: null,
  nombreCompleto: "",
  edad: null,
  sexo: "",
  estadoCivil: "",
  token: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserData: (state, action: PayloadAction<UserState>) => {
      Object.assign(state, action.payload);
    },
    clearUserData: (state) => {
      Object.assign(state, initialState);
    },
  },
});

export const { setUserData, clearUserData } = userSlice.actions;
export default userSlice.reducer;
