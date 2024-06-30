import { createSlice } from "@reduxjs/toolkit";
import { AboutArrayTypes } from "../types";
import { FetchAboutData } from "../services";

const initialAboutDataState: AboutArrayTypes = {
  aboutList: [],
  isLoading: false,
  error: "",
};

export const AboutDataSlice = createSlice({
  name: "AboutData",
  initialState: initialAboutDataState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(FetchAboutData.pending, (state) => {
        state.isLoading = true;
        state.error = undefined;
      })
      .addCase(FetchAboutData.fulfilled, (state, action) => {
        state.aboutList = action.payload;
        state.isLoading = false;
      })
      .addCase(FetchAboutData.rejected, (state) => {
        state.isLoading = false;
        state.error = "An unknown error has occurred";
      });
  },
});

export const { reducer: AboutDataSliceReducer } = AboutDataSlice;
