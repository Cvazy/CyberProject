import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { serverUrl } from "app/constants";
import { LOCALSTORAGE_USER_KEY } from "shared/const";
import { userActions } from "entities/User";
import { CartItem } from "entities/User/model/types";

export const RemoveProductFromCart = createAsyncThunk(
  "CartPage/RemoveProductFromCart",
  async (productId: string, { dispatch, rejectWithValue }) => {
    try {
      const userData = localStorage.getItem(LOCALSTORAGE_USER_KEY) || "";
      const userID = JSON.parse(userData).id.toString();

      const response = await axios.get(`${serverUrl}/users/${userID}`);
      let cart = response.data?.cart;

      cart = cart.filter((item: CartItem) => !item.hasOwnProperty(productId));

      const updateResponse = await axios.put(`${serverUrl}/users/${userID}`, {
        ...response.data,
        cart: cart,
      });

      dispatch(userActions.initUserCart(updateResponse.data?.cart));

      return updateResponse.data?.cart;
    } catch (error: any) {
      return rejectWithValue(error.response.data.message);
    }
  },
);
