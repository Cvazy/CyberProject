import { combineReducers } from "@reduxjs/toolkit";
import MainBannerReducer from "entities/MainBanner/model/slice";

export const rootReducer = combineReducers({
  MainBannerReducer,
});
