import { combineReducers } from "@reduxjs/toolkit";
import MainBannerReducer from "entities/MainBanner/model/slice";
import SmallBannerReducer from "entities/SmallerBanners/model/slice";

export const rootReducer = combineReducers({
  MainBannerReducer,
  SmallBannerReducer,
});
