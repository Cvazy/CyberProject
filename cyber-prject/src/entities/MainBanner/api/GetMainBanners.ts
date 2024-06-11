import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { MainBannerTypes } from "../model/types";

export const GetMainBanners = createAsyncThunk(
  "MainBanners/GetMainBanners",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get<MainBannerTypes[]>(
        "http://localhost:8080/mainBanners",
      );

      return response.data;
    } catch (error) {
      return rejectWithValue("An unknown error has occurred");
    }
  },
);
