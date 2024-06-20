import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { CategoriesTypes } from "../model/types";
import { serverUrl } from "app/constants";

export const GetCategories = createAsyncThunk(
  "ShopCategories/GetCategories",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get<CategoriesTypes[]>(
        `${serverUrl}/categories`,
      );

      return response.data;
    } catch (error) {
      return rejectWithValue("An unknown error has occurred");
    }
  },
);
