import { createSlice } from "@reduxjs/toolkit";
import { ChatSliceType } from "../utils/types";
import { fetchChat, fetchChats } from "./actions";
import { sortByDate } from "../utils/sortByData";

const initialState: ChatSliceType = {
  chat: {
    user: null,
    messages: null,
    loading: true,
  },
  chatList: {
    list: null,
    loading: false,
  },
};

const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // fetchChat
    builder.addCase(fetchChat.pending, (state) => {
      console.log("fetchChat.pending");
      state.chat.loading = true;
    });
    builder.addCase(fetchChat.fulfilled, (state, action) => {
      console.log("fetchChat.fulfilled");
      state.chat.loading = false;
      const messages = sortByDate(action.payload?.messages || []);
      state.chat.user = action.payload?.user || null;
      state.chat.messages = messages;
    });
    builder.addCase(fetchChat.rejected, (state, action) => {
      console.log("fetchChat.rejected");
      state.chat.loading = false;
      state.chat.error = action.payload;
    });

    // fetchChats
    builder.addCase(fetchChats.pending, (state) => {
      console.log("fetchChats.pending");
      state.chatList.loading = true;
    });
    builder.addCase(fetchChats.fulfilled, (state, action) => {
      console.log("fetchChats.fulfilled");
      state.chatList.loading = false;
      state.chatList.list = action.payload;
    });
    builder.addCase(fetchChats.rejected, (state, action) => {
      console.log("fetchChats.rejected");
      state.chatList.loading = false;
      state.chatList.error = action.payload;
    });
  },
});

export default chatSlice.reducer;
