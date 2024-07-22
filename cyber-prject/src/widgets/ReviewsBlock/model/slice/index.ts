import { ReviewsListData } from "../types";
import { createSlice } from "@reduxjs/toolkit";
import { FetchReviews } from "../services";
import { AddNewReview } from "features/AddReviewOnProduct";

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
        state.reviewsData = action.payload;
        state.isLoading = false;
      })
      .addCase(FetchReviews.rejected, (state) => {
        state.isLoading = false;
        state.error = "An error occurred while uploading reviews";
      })

      .addCase(AddNewReview.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(AddNewReview.fulfilled, (state, action) => {
        state.reviewsData = state.reviewsData
          ? [...state.reviewsData, action.payload]
          : [action.payload];
        state.isLoading = false;
      })
      .addCase(AddNewReview.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const { reducer: reviewsReducer } = ReviewsSlice;
