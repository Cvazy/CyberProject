import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { serverUrl } from "app/constants";
import mergeFavoriteProducts from "widgets/ProductList/model/utils/mergeFavoriteProducts";
import { ProductSchema } from "../../../../widgets";

interface FetchPaginationProductsProps {
  userId: number;
  currentPage: string;
  sortedValue: string;
}

export const FetchPaginationProducts = createAsyncThunk(
  "Catalog/FetchPaginationProducts",
  async (
    { userId, currentPage, sortedValue }: FetchPaginationProductsProps,
    { dispatch, rejectWithValue },
  ) => {
    try {
      const response = await axios.get(
        `${serverUrl}/products?_page=${currentPage}&_limit=9`,
      );

      let sortedProducts = [...response.data];

      if (sortedValue === "A-Z") {
        sortedProducts.sort((a: ProductSchema, b: ProductSchema) =>
          a.name.localeCompare(b.name),
        );
      } else if (sortedValue === "Z-A") {
        sortedProducts.sort((a: ProductSchema, b: ProductSchema) =>
          b.name.localeCompare(a.name),
        );
      }

      return mergeFavoriteProducts(sortedProducts, userId);
    } catch (error: any) {
      return rejectWithValue(error.response.data.message);
    }
  },
);
