import { LoginSchema } from "../types/loginSchema";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LoginByUsername } from "../services";

const initialLoginState: LoginSchema = {
  username: "",
  password: "",
  isLoading: false,
  error: "",
};

export const LoginSlice = createSlice({
  name: "Login",
  initialState: initialLoginState,
  reducers: {
    setLogin: (state, action: PayloadAction<string>) => {
      state.username = action.payload;
    },

    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(LoginByUsername.pending, (state) => {
        state.isLoading = true;
        state.error = undefined;
      })
      .addCase(LoginByUsername.fulfilled, (state, action) => {
        state.isLoading = false;
      })
      .addCase(LoginByUsername.rejected, (state) => {
        state.isLoading = false;
        state.error = "Incorrect data was entered";
      });
  },
});

export const { actions: loginActions } = LoginSlice;
export const { reducer: loginReducer } = LoginSlice;
