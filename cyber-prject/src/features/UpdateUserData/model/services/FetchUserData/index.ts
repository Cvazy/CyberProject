import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { serverUrl } from "app/constants";
import { LOCALSTORAGE_USER_KEY } from "../../../../../shared/const/localstorage";

export const FetchUserData = createAsyncThunk(
  "ProfileData/FetchUserData",
  async (_, { rejectWithValue }) => {
    try {
      const userData = localStorage.getItem(LOCALSTORAGE_USER_KEY) || "";
      const userID = JSON.parse(userData).id.toString();

      const response = await axios.get(`${serverUrl}/profiles?id=${userID}`);

      return response.data[0];
    } catch (error: any) {
      return rejectWithValue(error.response.data.message);
    }
  },
);
