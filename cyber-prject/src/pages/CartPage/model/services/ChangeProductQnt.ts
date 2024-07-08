import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { serverUrl } from "app/constants";
import { LOCALSTORAGE_USER_KEY } from "shared/const";
import { userActions } from "entities/User";

interface ChangeProductQntProps {
  productId: string;
  action: string;
}

export const ChangeProductQnt = createAsyncThunk(
  "CartPage/ChangeProductQnt",
  async (
    { productId, action }: ChangeProductQntProps,
    { dispatch, rejectWithValue },
  ) => {
    try {
      const userData = localStorage.getItem(LOCALSTORAGE_USER_KEY) || "";
      const userID = JSON.parse(userData).id.toString();

      const response = await axios.get(`${serverUrl}/users/${userID}`);
      let cart = response.data?.cart;

      cart = cart.map((item: any) => {
        if (item.hasOwnProperty(productId)) {
          if (action === "increment") {
            item[productId]++;
          } else if (action === "decrement" && item[productId] > 0) {
            item[productId]--;
          }
        }
        return item;
      });

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
