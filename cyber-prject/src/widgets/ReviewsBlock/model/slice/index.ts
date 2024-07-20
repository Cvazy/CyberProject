import { ReviewsListData } from "../types";
import { createSlice } from "@reduxjs/toolkit";
import { FetchReviews } from "../services";

const initialReviewsState: ReviewsListData = {
  reviewsData: undefined,
  isLoading: false,
  error: "",
};

export const ReviewsSlice = createSlice({
  name: "Reviews",
  initialState: initialReviewsState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(FetchReviews.pending, (state) => {
        state.isLoading = true;
        state.error = undefined;
      })
      .addCase(FetchReviews.fulfilled, (state, action) => {
        state.reviewsData = action.payload?.reviewsList;
        state.isLoading = false;
      })
      .addCase(FetchReviews.rejected, (state) => {
        state.isLoading = false;
        state.error = "An error occurred while uploading reviews";
      });
  },
});

export const { reducer: reviewsReducer } = ReviewsSlice;
