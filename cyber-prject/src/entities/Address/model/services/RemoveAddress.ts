import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { serverUrl } from "app/constants";
import { LOCALSTORAGE_USER_KEY } from "shared/const";
import { AddressItem } from "../../../User/model/types";

interface RemoveAddressProps {
  addressId: string | number;
}

export const RemoveAddress = createAsyncThunk(
  "Checkout/RemoveAddress",
  async ({ addressId }: RemoveAddressProps, { dispatch, rejectWithValue }) => {
    try {
      const userData = localStorage.getItem(LOCALSTORAGE_USER_KEY) || "";
      const userID = JSON.parse(userData).id.toString();

      const responseUserData = await axios.get(`${serverUrl}/users/${userID}`);

      const newUserAddresses = responseUserData.data.addresses.filter(
        (address: AddressItem) => address.id !== addressId,
      );

      const response = await axios.patch(`${serverUrl}/users/${userID}`, {
        addresses: newUserAddresses,
      });

      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data.message);
    }
  },
);
