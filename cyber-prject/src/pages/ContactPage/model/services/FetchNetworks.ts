import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { serverUrl } from "app/constants";

export const FetchNetworks = createAsyncThunk(
  "ContactPage/FetchNetworks",
  async (_, { dispatch, rejectWithValue }) => {
    try {
      const response = await axios.get(`${serverUrl}/networks`);

      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data.message);
    }
  },
);
