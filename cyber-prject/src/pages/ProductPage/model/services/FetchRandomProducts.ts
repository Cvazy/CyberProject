import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { serverUrl } from "app/constants";
import { productActions } from "../slice";

export const FetchRandomProducts = createAsyncThunk(
  "Product/FetchRandomProducts",
  async (_, { dispatch, rejectWithValue }) => {
    try {
      const response = await axios.get(`${serverUrl}/products`);
      const data = response.data;

      const randomData = data.sort(() => 0.5 - Math.random()).slice(0, 4);

      dispatch(productActions.setRandomProducts(randomData));

      return randomData;
    } catch (error: any) {
      return rejectWithValue(error.response.data.message);
    }
  },
);
