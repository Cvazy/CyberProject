import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { serverUrl } from "app/constants";

interface FetchAllReviewsProps {
  productId: number;
}

export const FetchAllReviews = createAsyncThunk(
  "Product/FetchAllReviews",
  async (
    { productId }: FetchAllReviewsProps,
    { dispatch, rejectWithValue },
  ) => {
    if (productId) {
      try {
        const response = await axios.get(
          `${serverUrl}/reviews?productId=${productId}`,
        );

        return response.data;
      } catch (error: any) {
        return rejectWithValue(error.response.data.message);
      }
    }
  },
);
