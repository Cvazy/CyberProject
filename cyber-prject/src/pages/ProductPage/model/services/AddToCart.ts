import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { serverUrl } from "app/constants";
import { userActions } from "../../../../entities/User";
import { User } from "../../../../entities/User/model/types";

interface AddToCartProps {
  userId: number;
  productId: string;
}

interface RootState {
  userReducer: {
    authData: User;
  };
}

export const AddToCart = createAsyncThunk(
  "Product/AddToCart",
  async (
    { userId, productId }: AddToCartProps,
    { dispatch, getState, rejectWithValue },
  ) => {
    try {
      const cartElement = {
        [productId]: 1,
      };

      const state = getState();
      let userCart = (state as RootState).userReducer.authData.cart || [];

      if (!userCart) {
        userCart = [];
      }

      const updatedCart = [...userCart, cartElement];

      const response = await axios.patch(`${serverUrl}/users/${userId}`, {
        cart: updatedCart,
      });

      dispatch(userActions.addProductToCart(cartElement));

      return response.data;
    } catch (error: any) {
      console.log(error);
      return rejectWithValue(error.response.data.message);
    }
  },
);
