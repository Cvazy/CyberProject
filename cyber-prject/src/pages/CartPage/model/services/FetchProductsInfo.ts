import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { serverUrl } from "app/constants";

interface FetchProductsInfoProps {
  productsIds: string[];
}

export const FetchProductsInfo = createAsyncThunk(
  "CartPage/FetchProductsInfo",
  async (
    { productsIds }: FetchProductsInfoProps,
    { dispatch, rejectWithValue },
  ) => {
    try {
      const productsPromises = productsIds.map((id) =>
        axios.get(`${serverUrl}/products/${id}`),
      );

      const productsRequest = await Promise.all(productsPromises);

      return productsRequest.map((product) => product.data);
    } catch (error: any) {
      return rejectWithValue(error.response.data.message);
    }
  },
);
