import { User, UserSchema } from "../types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LOCALSTORAGE_USER_KEY } from "shared/const";

const initialState: UserSchema = {};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setAuthData(state, action: PayloadAction<User>) {
      state.authData = action.payload;
    },

    initAuthData(state) {
      const user = localStorage.getItem(LOCALSTORAGE_USER_KEY);

      if (user) {
        state.authData = JSON.parse(user);
      }
    },

    logout(state) {
      state.authData = undefined;
      localStorage.removeItem(LOCALSTORAGE_USER_KEY);
    },

    initUserCart(state, action) {
      if (state.authData?.cart) {
        state.authData.cart = action.payload;
      }
    },

    addProductToCart(state, action) {
      if (state.authData?.cart) {
        state.authData.cart.push(action.payload);
      } else {
        state.authData = { ...state.authData, cart: [action.payload] };
      }
    },
  },
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
