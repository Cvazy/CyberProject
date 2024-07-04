import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { serverUrl } from "app/constants";
import { LOCALSTORAGE_USER_KEY } from "shared/const";
import { userActions } from "entities/User";

interface LoginByUsernameProps {
  username: string;
  password: string;
}

export const LoginByUsername = createAsyncThunk(
  "LoginForm/LoginByUsername",
  async (
    { username, password }: LoginByUsernameProps,
    { dispatch, rejectWithValue },
  ) => {
    try {
      const response = await axios.post(`${serverUrl}/login`, {
        username,
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
