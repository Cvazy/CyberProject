import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { SmallBannersTypes } from "../model/types";
import { serverUrl } from "app/constants";

export const GetSmallBanners = createAsyncThunk(
  "SmallBanners/GetSmallBanners",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get<SmallBannersTypes[]>(
        `${serverUrl}/smallBanners`,
      );

      return response.data;
    } catch (error) {
      return rejectWithValue("An unknown error has occurred");
    }
  },
);
