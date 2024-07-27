import { CartSchema, PriceSum } from "../types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  FetchUserCart,
  FetchProductsInfo,
  RemoveProductFromCart,
  ChangeProductQnt,
  FetchPromoCode,
} from "../services";

const initialCartState: CartSchema = {
  isLoading: false,
  promoCodeIsLoading: false,
  error: "",
  promoCodeSale: undefined,
  promoCodeError: "",
  priceSum: undefined,
  fullAddress: undefined,
  shipment: undefined,
};

export const CartSlice = createSlice({
  name: "Product",
  initialState: initialCartState,
  reducers: {
    setCheckoutData(state, action: PayloadAction<PriceSum>) {
      state.priceSum = action.payload;
    },

    setFullAddressData(state, action) {
      state.fullAddress = action.payload;
    },

    setShipmentPrice(state, action) {
      state.shipment = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(FetchUserCart.pending, (state) => {
        state.isLoading = true;
        state.error = undefined;
      })
      .addCase(FetchUserCart.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(FetchUserCart.rejected, (state) => {
        state.isLoading = false;
        state.error = "An unknown error occurred while uploading product data";
      })

      .addCase(FetchProductsInfo.pending, (state) => {
        state.isLoading = true;
        state.error = undefined;
      })
      .addCase(FetchProductsInfo.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(FetchProductsInfo.rejected, (state) => {
        state.isLoading = false;
        state.error = "An unknown error occurred while uploading product data";
      })

      .addCase(RemoveProductFromCart.pending, (state) => {
        state.isLoading = true;
        state.error = undefined;
      })
      .addCase(RemoveProductFromCart.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(RemoveProductFromCart.rejected, (state) => {
        state.isLoading = false;
        state.error = "An error occurred when deleting the product";
      })

      .addCase(ChangeProductQnt.pending, (state) => {
        state.isLoading = true;
        state.error = undefined;
      })
      .addCase(ChangeProductQnt.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(ChangeProductQnt.rejected, (state) => {
        state.isLoading = false;
        state.error =
          "An unexpected error occurred when changing the quantity of the product";
      })

      .addCase(FetchPromoCode.pending, (state) => {
        state.promoCodeIsLoading = true;
        state.promoCodeError = undefined;
      })
      .addCase(FetchPromoCode.fulfilled, (state, action) => {
        state.promoCodeIsLoading = false;
        state.promoCodeSale = action.payload;
      })
      .addCase(FetchPromoCode.rejected, (state) => {
        state.promoCodeIsLoading = false;
        state.promoCodeError = "Erroneous or non-existent code";
      });
  },
});

export const { actions: cartActions } = CartSlice;

export const { reducer: cartReducer } = CartSlice;
