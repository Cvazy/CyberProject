import { MainBannerTypes } from "../types";
import { createSlice } from "@reduxjs/toolkit";
import { GetMainBanners } from "../../api/GetMainBanners";

interface MainBannerState {
  banners: MainBannerTypes[];
  isLoading: boolean;
  error: string;
}

const initialMainBannerState: MainBannerState = {
  banners: [],
  isLoading: false,
  error: "",
};

export const MainBannerSlice = createSlice({
  name: "MainBanner",
  initialState: initialMainBannerState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(GetMainBanners.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(GetMainBanners.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = "";
        state.banners = action.payload;
      })
      .addCase(GetMainBanners.rejected, (state) => {
        state.isLoading = false;
        state.error = "An unknown error has occurred";
      });
  },
});

export default MainBannerSlice.reducer;
