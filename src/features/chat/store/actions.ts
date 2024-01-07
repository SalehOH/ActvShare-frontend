import { createAsyncThunk } from "@reduxjs/toolkit";
import { get } from "@/utils/axiosWrapper";
import { ChatType, ChatListType } from "../utils/types";

export const fetchChat = createAsyncThunk("chat/fetchChat", async (chatId: string, { rejectWithValue }) => {
  try {
    const url = import.meta.env.VITE_CHAT_URL + chatId;
    const response = await get<ChatType | null>(url);
    return response.data;
  } catch (error: any) {
    return rejectWithValue(error.message);
  }
});

export const fetchChats = createAsyncThunk("chat/fetchChats", async (_, { rejectWithValue }) => {
  try {
    const url = import.meta.env.VITE_CHAT_URL;
    const response = await get<ChatListType[]>(url);
    return response.data;
  } catch (err: any) {
    return rejectWithValue(err.response.data);
  }
});
