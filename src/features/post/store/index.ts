import { createSlice } from "@reduxjs/toolkit";
import { PostSlice } from "../utils/types";
import { fetchPost, addReply } from "./actions";

const initialState: PostSlice = {
  postWithReplies: null,
  loading: true,
  error: null,
};

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    toggleLike: (state, action) => {
      const post = state.postWithReplies?.post;
      if (post) {
        if (action.payload.type === "add") {
          post.isLiked = true;
          post.likesCount++;
        } else {
          post.isLiked = false;
          post.likesCount--;
        }
      }
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchPost.fulfilled, (state, action) => {
      state.postWithReplies = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchPost.rejected, (state, action) => {
      state.error = action.payload;
      state.loading = false;
    });
    builder.addCase(addReply.fulfilled, (state, action) => {
      if (action.payload) state.postWithReplies?.replies.push(action.payload);
    });
  },
});

export const { toggleLike } = postSlice.actions;
export default postSlice.reducer;
