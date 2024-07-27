import { User, UserSchema } from "../types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LOCALSTORAGE_USER_KEY } from "shared/const";
import { FetchUserAddress, FetchNewAddress } from "features";
import { EditAddress, RemoveAddress } from "../../../Address";

const initialState: UserSchema = {
  error: undefined,
  isLoading: false,
};

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
  extraReducers: (builder) => {
    builder
      .addCase(FetchUserAddress.pending, (state, action) => {
        state.isLoading = true;
        state.error = undefined;
      })
      .addCase(FetchUserAddress.fulfilled, (state, action) => {
        state.authData = action.payload;
        state.isLoading = false;
      })
      .addCase(FetchUserAddress.rejected, (state) => {
        state.isLoading = false;
        state.error = "An unknown error has occurred";
      })

      .addCase(RemoveAddress.pending, (state, action) => {
        state.isLoading = true;
        state.error = undefined;
      })
      .addCase(RemoveAddress.fulfilled, (state, action) => {
        state.authData = action.payload;
        state.isLoading = false;
      })
      .addCase(RemoveAddress.rejected, (state) => {
        state.isLoading = false;
        state.error = "An error occurred when deleting the address";
      })

      .addCase(EditAddress.pending, (state, action) => {
        state.isLoading = true;
        state.error = undefined;
      })
      .addCase(EditAddress.fulfilled, (state, action) => {
        state.authData = action.payload;
        state.isLoading = false;
      })
      .addCase(EditAddress.rejected, (state) => {
        state.isLoading = false;
        state.error = "An error occurred when changing the address";
      })

      .addCase(FetchNewAddress.pending, (state, action) => {
        state.isLoading = true;
        state.error = undefined;
      })
      .addCase(FetchNewAddress.fulfilled, (state, action) => {
        state.authData = action.payload;
        state.isLoading = false;
      })
      .addCase(FetchNewAddress.rejected, (state) => {
        state.isLoading = false;
        state.error = "An error occurred while adding the address";
      });
  },
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
