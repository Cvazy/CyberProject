import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { serverUrl } from "app/constants";
import { LOCALSTORAGE_USER_KEY } from "shared/const";
import { AddressItem } from "../../../User/model/types";

interface EditAddressProps {
  addressId: string | number;
  title: string;
  full_address: string;
  phone: string;
}

export const EditAddress = createAsyncThunk(
  "Checkout/EditAddress",
  async (
    { addressId, full_address, phone, title }: EditAddressProps,
    { dispatch, rejectWithValue },
  ) => {
    try {
      const userData = localStorage.getItem(LOCALSTORAGE_USER_KEY) || "";
      const userID = JSON.parse(userData).id.toString();

      const responseUserData = await axios.get(`${serverUrl}/users/${userID}`);

      const addressIndex = responseUserData.data.addresses.findIndex(
        (address: AddressItem) => address.id === addressId,
      );

      if (addressIndex !== -1) {
        responseUserData.data.addresses[addressIndex] = {
          ...responseUserData.data.addresses[addressIndex],
          title,
          full_address,
          phone,
        };
      }

      const response = await axios.patch(`${serverUrl}/users/${userID}`, {
        addresses: responseUserData.data.addresses,
      });

      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data.message);
    }
  },
);
