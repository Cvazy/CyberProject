import { AddressSchema } from "../types";
import { createSlice } from "@reduxjs/toolkit";

const initialState: AddressSchema = {
  addressTitle: "",
  fullAddress: "",
  phoneNumber: "",
};

export const addressSlice = createSlice({
  name: "address",
  initialState,
  reducers: {
    setAddressTitle(state, action) {
      state.addressTitle = action.payload;
    },

    setFullAddress(state, action) {
      state.fullAddress = action.payload;
    },

    setPhoneNumber(state, action) {
      state.phoneNumber = action.payload;
    },
  },
});

export const { actions: addressActions } = addressSlice;
export const { reducer: addressReducer } = addressSlice;
