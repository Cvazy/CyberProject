import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { serverUrl } from "app/constants";
import { LOCALSTORAGE_USER_KEY } from "shared/const";
import { userActions } from "entities/User";

export const FetchUserCart = createAsyncThunk(
  "CartPage/FetchUserCart",
  async (_, { dispatch, rejectWithValue }) => {
    try {
      const userData = localStorage.getItem(LOCALSTORAGE_USER_KEY) || "";
      const userID = JSON.parse(userData).id.toString();

      const response = await axios.get(`${serverUrl}/users/${userID}`);

      dispatch(userActions.initUserCart(response.data?.cart));

      return response.data?.cart;
    } catch (error: any) {
      return rejectWithValue(error.response.data.message);
    }
  },
);
