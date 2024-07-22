import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { serverUrl } from "app/constants";

interface FetchReviewsProps {
  productId: number;
  limit: number;
}

export const FetchReviews = createAsyncThunk(
  "Product/FetchReviews",
  async (
    { productId, limit }: FetchReviewsProps,
    { dispatch, rejectWithValue },
  ) => {
    if (productId) {
      try {
        const response = await axios.get(
          `${serverUrl}/reviews?productId=${productId}&_limit=${limit}`,
        );

        return response.data;
      } catch (error: any) {
        return rejectWithValue(error.response.data.message);
      }
    }
  },
);
