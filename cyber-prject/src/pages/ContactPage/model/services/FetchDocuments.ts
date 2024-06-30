import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { serverUrl } from "app/constants";

export const FetchDocuments = createAsyncThunk(
  "ContactPage/FetchDocuments",
  async (_, { dispatch, rejectWithValue }) => {
    try {
      const response = await axios.get(`${serverUrl}/documents`);

      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data.message);
    }
  },
);
