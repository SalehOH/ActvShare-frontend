import { createAsyncThunk } from "@reduxjs/toolkit";
import { PostWithReplies } from "../utils/types";
import { get, post } from "@/utils/axiosWrapper";
import { ReplyType } from "@/features/home/utils/types";

export const fetchPost = createAsyncThunk("post/fetchPost", async (postId: string, { rejectWithValue }) => {
  try {
    const url = import.meta.env.VITE_POST_URL + postId;
    const response = await get<PostWithReplies>(url);

    return response.data;
  } catch (error: any) {
    return rejectWithValue(error.message);
  }
});

export const addReply = createAsyncThunk(
  "post/addReply",
  async ({ postId, content }: { postId: string; content: string }, { rejectWithValue }) => {
    try {
      const url = import.meta.env.VITE_POST_REPLY_URL;
      const response = await post<ReplyType>(url, { postId, content });

      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);
