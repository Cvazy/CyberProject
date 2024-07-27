import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { serverUrl } from "app/constants";
import { LOCALSTORAGE_USER_KEY } from "shared/const";
import { v4 as uuidv4 } from "uuid";

interface AddNewAddressProps {
  title: string;
  full_address: string;
  phone: string;
  placeStatus: string;
}

export const FetchNewAddress = createAsyncThunk(
  "Checkout/FetchNewAddress",
  async (
    { title, full_address, phone, placeStatus }: AddNewAddressProps,
    { dispatch, rejectWithValue },
  ) => {
    try {
      const userData = localStorage.getItem(LOCALSTORAGE_USER_KEY) || "";
      const userID = JSON.parse(userData).id.toString();

      const responseUserData = await axios.get(`${serverUrl}/users/${userID}`);

      const response = await axios.patch(`${serverUrl}/users/${userID}`, {
        addresses: [
          ...responseUserData.data.addresses,
          {
            id: uuidv4(),
            title,
            full_address,
            phone,
            placeStatus,
          },
        ],
      });

      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data.message);
    }
  },
);
