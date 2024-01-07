import { createAsyncThunk } from "@reduxjs/toolkit";
import { get } from "@/utils/axiosWrapper";
import { UserPostsResponse } from "../utils/types";
import { isAxiosError } from "axios";

export const getUser = createAsyncThunk("user/getUser", 
  async (username: string, { rejectWithValue }) => {
  try {
    const url = import.meta.env.VITE_USER_URL + username;
    const response = await get<UserPostsResponse>(url);

    if (response.error) throw response.error;

    return response.data;
  } catch (error) {
    if (isAxiosError(error)) return rejectWithValue(error.response?.data);
    return null;
  }
});
