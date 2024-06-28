import { combineReducers } from "@reduxjs/toolkit";
import MainBannerReducer from "entities/MainBanner/model/slice";
import SmallBannerReducer from "entities/SmallerBanners/model/slice";
import CategoriesReducer from "entities/ShopCategories/model/slice";
import { loginReducer } from "features/AuthByLogin/model";
import { userReducer } from "entities/User";
import { updateUserDataReducer } from "features/UpdateUserData/model";
import { ProductListReducer } from "../../../../widgets/ProductList/model";

export const rootReducer = combineReducers({
  MainBannerReducer,
  SmallBannerReducer,
  CategoriesReducer,
  loginReducer,
  userReducer,
  updateUserDataReducer,
  ProductListReducer,
});
