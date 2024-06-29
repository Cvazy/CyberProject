import { RegisterSchema } from "../types/registerSchema";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RegisterNewUser } from "../services";

const initialRegisterState: RegisterSchema = {
  username: "",
  password: "",
  repeatPassword: "",
  isLoading: false,
  error: "",
};

export const RegisterSlice = createSlice({
  name: "Register",
  initialState: initialRegisterState,
  reducers: {
    setLogin: (state, action: PayloadAction<string>) => {
      state.username = action.payload;
    },

    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },

    setRepeatPassword: (state, action: PayloadAction<string>) => {
      state.repeatPassword = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(RegisterNewUser.pending, (state) => {
        state.isLoading = true;
        state.error = undefined;
      })
      .addCase(RegisterNewUser.fulfilled, (state, action) => {
        state.isLoading = false;
      })
      .addCase(RegisterNewUser.rejected, (state) => {
        state.isLoading = false;
        state.error = "An unexpected error has occurred";
      });
  },
});

export const { actions: registerActions } = RegisterSlice;
export const { reducer: registerReducer } = RegisterSlice;
