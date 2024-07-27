import { combineReducers } from "@reduxjs/toolkit";
import MainBannerReducer from "entities/MainBanner/model/slice";
import SmallBannerReducer from "entities/SmallerBanners/model/slice";
import CategoriesReducer from "entities/ShopCategories/model/slice";
import {
  loginReducer,
  updateUserDataReducer,
  registerReducer,
  addressReducer,
} from "features";
import { userReducer } from "entities/User";
import { AboutDataSliceReducer } from "pages/AboutPage";
import { ContactDataSliceReducer } from "pages/ContactPage/model";
import { productReducer } from "pages/ProductPage/model";
import { cartReducer } from "pages/CartPage/model";
import SearchedProductsReducer from "features/SearchedProducts/model/slice";
import { reviewsReducer, ProductListReducer } from "widgets";

export const rootReducer = combineReducers({
  MainBannerReducer,
  SmallBannerReducer,
  CategoriesReducer,
  loginReducer,
  registerReducer,
  userReducer,
  updateUserDataReducer,
  ProductListReducer,
  AboutDataSliceReducer,
  ContactDataSliceReducer,
  productReducer,
  cartReducer,
  SearchedProductsReducer,
  reviewsReducer,
  addressReducer,
});
