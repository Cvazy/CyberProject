import { SmallBannersTypes } from "../types";
import { createSlice } from "@reduxjs/toolkit";
import { GetSmallBanners } from "../../api/GetSmallBanners";

interface SmallBannerState {
  smallBanners: SmallBannersTypes[];
  isLoading: boolean;
  error: string;
}

const initialSmallBannerState: SmallBannerState = {
  smallBanners: [],
  isLoading: false,
  error: "",
};

export const SmallBannerSlice = createSlice({
  name: "SmallBanners",
  initialState: initialSmallBannerState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(GetSmallBanners.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(GetSmallBanners.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = "";
        state.smallBanners = action.payload;
      })
      .addCase(GetSmallBanners.rejected, (state) => {
        state.isLoading = false;
        state.error = "An unknown error has occurred";
      });
  },
});

export default SmallBannerSlice.reducer;
