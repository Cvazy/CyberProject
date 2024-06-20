import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { serverUrl } from "app/constants";
import { LOCALSTORAGE_USER_KEY } from "../../../../../shared/const/localstorage";
import { userActions } from "../../../../../entities/User";

interface LoginByUsernameProps {
  login: string;
  password: string;
}

export const LoginByUsername = createAsyncThunk(
  "LoginForm/LoginByUsername",
  async (
    { login, password }: LoginByUsernameProps,
    { dispatch, rejectWithValue },
  ) => {
    try {
      const response = await axios.post(`${serverUrl}/login`, {
        username: login,
        password,
      });

      localStorage.setItem(
        LOCALSTORAGE_USER_KEY,
        JSON.stringify(response.data),
      );
      dispatch(userActions.setAuthData(response.data));

      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data.message);
    }
  },
);
