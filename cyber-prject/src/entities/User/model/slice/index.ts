import { User, UserSchema } from "../types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LOCALSTORAGE_USER_KEY } from "../../../../shared/const/localstorage";

const initialState: UserSchema = {};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setAuthData(state, action: PayloadAction<User>) {
      state.authData = action.payload;
    },

    initAuthData(state) {
      const user = localStorage.getItem(LOCALSTORAGE_USER_KEY);

      if (user) {
        state.authData = JSON.parse(user);
      }
    },
    logout(state) {
      state.authData = undefined;
      localStorage.removeItem(LOCALSTORAGE_USER_KEY);
    },

    setUserName: (state, action: PayloadAction<string>) => {
      state.authData && (state.authData.name = action.payload);
    },

    // setUserSurname: (state, action: PayloadAction<string>) => {
    //   state.newUserData.surname = action.payload;
    // },
    //
    // setUserPatronymic: (state, action: PayloadAction<string>) => {
    //   state.newUserData.patronymic = action.payload;
    // },
    //
    // setUserBirthday: (state, action: PayloadAction<string>) => {
    //   state.newUserData.birthday = action.payload;
    // },
  },
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
