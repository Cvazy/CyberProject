import { createSlice } from "@reduxjs/toolkit";
import { ContactsPageState } from "../types";
import { FetchContacts, FetchDocuments, FetchNetworks } from "../services";

const initialContactDataState: ContactsPageState = {
  contactsData: [],
  documentsData: [],
  networksData: [],
  isLoadingContacts: false,
  isLoadingDocuments: false,
  isLoadingNetworks: false,
  errorContacts: "",
  errorDocuments: "",
  errorNetworks: "",
};

export const ContactDataSlice = createSlice({
  name: "ContactData",
  initialState: initialContactDataState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(FetchContacts.pending, (state) => {
        state.isLoadingContacts = true;
        state.errorContacts = undefined;
      })
      .addCase(FetchContacts.fulfilled, (state, action) => {
        state.contactsData = action.payload;
        state.isLoadingContacts = false;
      })
      .addCase(FetchContacts.rejected, (state) => {
        state.isLoadingContacts = false;
        state.errorContacts = "Download error";
      })

      .addCase(FetchDocuments.pending, (state) => {
        state.isLoadingDocuments = true;
        state.errorDocuments = undefined;
      })
      .addCase(FetchDocuments.fulfilled, (state, action) => {
        state.documentsData = action.payload;
        state.isLoadingDocuments = false;
      })
      .addCase(FetchDocuments.rejected, (state) => {
        state.isLoadingDocuments = false;
        state.errorDocuments = "Download error";
      })

      .addCase(FetchNetworks.pending, (state) => {
        state.isLoadingNetworks = true;
        state.errorNetworks = undefined;
      })
      .addCase(FetchNetworks.fulfilled, (state, action) => {
        state.networksData = action.payload;
        state.isLoadingNetworks = false;
      })
      .addCase(FetchNetworks.rejected, (state) => {
        state.isLoadingNetworks = false;
        state.errorNetworks = "Download error";
      });
  },
});

export const { reducer: ContactDataSliceReducer } = ContactDataSlice;
