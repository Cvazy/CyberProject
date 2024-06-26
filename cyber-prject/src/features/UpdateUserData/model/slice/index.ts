import { UpdateUserDataSchema } from "../types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FetchUserData, UpdateUserData } from "../services";

const initialUpdateUserDataState: UpdateUserDataSchema = {
  profileData: {},
  formData: {},
  isLoading: false,
  error: "",
  message: "",
};

export const UpdateUserDataSlice = createSlice({
  name: "UpdateUserData",
  initialState: initialUpdateUserDataState,
  reducers: {
    setProfileData: (state, action: PayloadAction<object>) => {
      state.formData = {
        ...state.formData,
        ...action.payload,
      };
    },

    setInitialData: (state) => {
      state.formData = state.profileData;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(FetchUserData.pending, (state) => {
        state.isLoading = true;
        state.error = undefined;
      })
      .addCase(FetchUserData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.profileData = action.payload;
        state.formData = action.payload;
      })
      .addCase(FetchUserData.rejected, (state) => {
        state.isLoading = false;
        state.error = "Your data could not be retrieved";
      })

      .addCase(UpdateUserData.pending, (state) => {
        state.isLoading = true;
        state.error = undefined;
      })
      .addCase(UpdateUserData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.profileData = action.payload;
        state.formData = action.payload;
      })
      .addCase(UpdateUserData.rejected, (state) => {
        state.isLoading = false;
        state.error = "Your data could not be updated";
      });
  },
});

export const { actions: updateUserDataActions } = UpdateUserDataSlice;
export const { reducer: updateUserDataReducer } = UpdateUserDataSlice;
