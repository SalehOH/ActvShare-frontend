import { createAsyncThunk } from "@reduxjs/toolkit";
import { post } from "@/utils/axiosWrapper";
import { ApplicationUser } from "@/utils/types";
import axios, { isAxiosError } from "axios";

export const signupUser = createAsyncThunk("auth/signupUser", async (signupData: FormData, { rejectWithValue }) => {
  try {
    const url = import.meta.env.VITE_REGISTER_URL;
    const response = await post<ApplicationUser>(url, signupData, true);

    if (response.error) throw response.error;

    return response.data;
  } catch (error: any) {
    if (isAxiosError(error)) {
      return rejectWithValue(error.response?.data);
    }
    return null;
  }
});

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async ({ username, password }: { username: string; password: string }, { rejectWithValue }) => {
    try {
      const url = import.meta.env.VITE_LOGIN_URL;
      const response = await post<ApplicationUser>(url, { username, password });

      if (response.error) throw response.error;

      return response.data;
    } catch (error: unknown) {
      if (isAxiosError(error)) {
        const errorResponse = "Invalid username or password.";
        return rejectWithValue(errorResponse);
      }
      return null;
    }
  }
);

export const refreshUser = createAsyncThunk("auth/refreshUser", async (_, { rejectWithValue }) => {
  try {
    const response = await axios.post(import.meta.env.VITE_REFRESH_URL, null, { withCredentials: true });
    return response.data as ApplicationUser;
  } catch (error: unknown) {
    if (isAxiosError(error)) {
      return rejectWithValue(error.response?.data);
    }
    return null;
  }
});

export const logoutUser = createAsyncThunk("auth/logoutUser", async (_, { rejectWithValue }) => {
  try {
    const url = import.meta.env.VITE_LOGOUT_URL;
    const response = await post<boolean>(url);

    return response.data;
  } catch (error: unknown) {
    if (isAxiosError(error)) {
      return rejectWithValue(error.response?.data);
    }
    return null;
  }
});
