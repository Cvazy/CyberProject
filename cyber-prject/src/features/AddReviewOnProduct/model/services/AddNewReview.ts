import { v4 as uuidv4 } from "uuid";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { serverUrl } from "app/constants";
import { LOCALSTORAGE_USER_KEY } from "../../../../shared/const";

interface AddNewReviewProps {
  productId: number;
  text: string;
  mark: number;
}

export const AddNewReview = createAsyncThunk(
  "RegisterForm/RegisterNewUser",
  async (
    { productId, text, mark }: AddNewReviewProps,
    { dispatch, rejectWithValue },
  ) => {
    let currentDate = new Date(); // Получаем текущую дату
    let options: Intl.DateTimeFormatOptions = {
      day: "numeric",
      month: "long",
      year: "numeric",
    };
    let formattedDate = currentDate.toLocaleDateString("en-US", options);
    try {
      const userData = localStorage.getItem(LOCALSTORAGE_USER_KEY) || "";
      const userID = JSON.parse(userData).id.toString();

      const responseProfileData = await axios.get(
        `${serverUrl}/profiles?id=${userID}`,
      );

      const fullUsername = `${responseProfileData.data[0].name} ${responseProfileData.data[0].surname}`;

      const newReview = {
        id: uuidv4(),
        text,
        mark,
        date: formattedDate,
        username: fullUsername,
        productId,
      };

      const response = await axios.post(`${serverUrl}/reviews`, newReview);

      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data.message);
    }
  },
);
