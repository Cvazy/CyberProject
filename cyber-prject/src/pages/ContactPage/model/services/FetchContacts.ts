import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { serverUrl } from "app/constants";

export const FetchContacts = createAsyncThunk(
  "ContactPage/FetchContacts",
  async (_, { dispatch, rejectWithValue }) => {
    try {
      const response = await axios.get(`${serverUrl}/contacts`);

      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data.message);
    }
  },
);
