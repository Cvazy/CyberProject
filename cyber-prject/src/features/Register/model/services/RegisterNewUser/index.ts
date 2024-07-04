import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { serverUrl } from "app/constants";
import { LOCALSTORAGE_USER_KEY } from "shared/const";
import { userActions } from "entities/User";

interface RegisterNewUserProps {
  username: string;
  password: string;
}

export const RegisterNewUser = createAsyncThunk(
  "RegisterForm/RegisterNewUser",
  async (
    { username, password }: RegisterNewUserProps,
    { dispatch, rejectWithValue },
  ) => {
    try {
      const response = await axios.post(`${serverUrl}/users`, {
        username,
        password,
      });

      localStorage.setItem(
        LOCALSTORAGE_USER_KEY,
        JSON.stringify(response.data),
      );

      dispatch(userActions.setAuthData(response.data));

      await axios.post(`${serverUrl}/profiles`, {
        username,
        name: "",
        surname: "",
        patronymic: "",
      });

      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data.message);
    }
  },
);
