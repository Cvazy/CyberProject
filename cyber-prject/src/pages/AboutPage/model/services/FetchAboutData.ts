import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { serverUrl } from "app/constants";

export const FetchAboutData = createAsyncThunk(
  "AboutPage/FetchAboutData",
  async (_, { dispatch, rejectWithValue }) => {
    try {
      const response = await axios.get(`${serverUrl}/about`);

      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data.message);
    }
  },
);
