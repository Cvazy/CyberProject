import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { serverUrl } from "app/constants";

export const FetchPromoCode = createAsyncThunk(
  "CartPage/FetchPromoCode",
  async (promoCodeValue: string, { dispatch, rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${serverUrl}/promoCodes/${promoCodeValue}`,
      );

      return response.data?.sale;
    } catch (error: any) {
      return rejectWithValue(error.response.data.message);
    }
  },
);
