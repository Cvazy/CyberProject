import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { serverUrl } from "app/constants";
import { LOCALSTORAGE_USER_KEY } from "shared/const";
import { ProfileSchema } from "../../types";

interface RootState {
  updateUserDataReducer: {
    formData: ProfileSchema;
  };
}

export const UpdateUserData = createAsyncThunk(
  "ProfileData/UpdateUserData",
  async (_, { rejectWithValue, getState }) => {
    try {
      const userData = localStorage.getItem(LOCALSTORAGE_USER_KEY) || "";
      const userID = JSON.parse(userData).id.toString();

      const formData = (getState() as RootState).updateUserDataReducer.formData;

      const response = await axios.put(
        `${serverUrl}/profiles/${userID}`,
        formData || {},
      );

      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data.message);
    }
  },
);
