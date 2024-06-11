import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { SmallBannersTypes } from "../model/types";

export const GetSmallBanners = createAsyncThunk(
  "SmallBanners/GetSmallBanners",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get<SmallBannersTypes[]>(
        "http://localhost:8080/smallBanners",
      );

      return response.data;
    } catch (error) {
      return rejectWithValue("An unknown error has occurred");
    }
  },
);
