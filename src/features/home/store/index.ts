import { createSlice } from "@reduxjs/toolkit";
import { HomeState } from "../utils/types";
import {
  fetchChats,
  fetchFollowings,
  fetchNotifications,
  fetchPosts,
  addPost,
  getSearchedUsers,
  follow,
  unfollow,
  createChat,
  addLike,
  removeLike,
} from "./actions";

const initialState: HomeState = {
  posts: {
    posts: null,
    loading: true,
    error: null,
  },
  chat: {
    chats: null,
    loading: true,
    error: null,
  },
  following: {
    followings: null,
    loading: true,
    error: null,
  },
  notifications: {
    notifications: null,
    loading: true,
    error: null,
  },
  SearchResults: {
    users: [],
    loading: true,
    error: null,
  },
};

const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    toggleFollow: (state, action) => {
      const user = state.SearchResults.users?.find((user) => user.username === action.payload.username);
      if (user) {
        if (action.payload.type === "follow") {
          user.isFollowed = true;
        } else {
          user.isFollowed = false;
        }
      }
    },
  },
  extraReducers: (builder) => {
    builder
      // Posts
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.posts.loading = false;
        if (action.payload !== null) {
          state.posts.posts = action.payload.sort(
            (a, b) => Number(new Date(b.createdAt)) - Number(new Date(a.createdAt))
          );
        }
        state.posts.error = null;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.posts.loading = false;
        state.posts.error = action.payload;
      })
      //add post
      .addCase(addPost.fulfilled, (state, action) => {
        state.posts.posts?.unshift(action.payload);
      })
      // Like
      .addCase(addLike.fulfilled, (state, action) => {
        if (action.payload) {
          const post = state.posts.posts?.find((post) => post.id === action.payload);
          if (post) {
            post.likesCount++;
            post.isLiked = true;
          }
        }
      })
      // Remove Like
      .addCase(removeLike.fulfilled, (state, action) => {
        if (action.payload) {
          const post = state.posts.posts?.find((post) => post.id === action.payload);
          if (post) {
            post.likesCount--;
            post.isLiked = false;
          }
        }
      })

      // Chats
      .addCase(fetchChats.fulfilled, (state, action) => {
        state.chat.loading = false;
        state.chat.chats = action.payload;
        state.chat.error = null;
      })
      .addCase(fetchChats.rejected, (state, action) => {
        state.chat.loading = false;
        state.chat.error = action.payload;
      })

      // Followings
      .addCase(fetchFollowings.fulfilled, (state, action) => {
        state.following.loading = false;
        state.following.followings = action.payload;
        state.following.error = null;
      })
      .addCase(fetchFollowings.rejected, (state, action) => {
        state.following.loading = false;
        state.following.error = action.payload;
      })

      // Notifications
      .addCase(fetchNotifications.fulfilled, (state, action) => {
        state.notifications.loading = false;
        state.notifications.notifications = action.payload;
        state.notifications.error = null;
      })
      .addCase(fetchNotifications.rejected, (state, action) => {
        state.notifications.loading = false;
        state.notifications.error = action.payload;
      })

      // Search Users
      .addCase(getSearchedUsers.pending, (state) => {
        state.SearchResults.users = [];
        state.SearchResults.loading = true;
      })
      .addCase(getSearchedUsers.fulfilled, (state, action) => {
        state.SearchResults.loading = false;
        state.SearchResults.users = action.payload;
        state.SearchResults.error = null;
      })
      .addCase(getSearchedUsers.rejected, (state, action) => {
        state.SearchResults.loading = false;
        state.SearchResults.error = action.payload;
      })

      // Follow
      .addCase(follow.fulfilled, (state, action) => {
        if (action.payload) state.following.followings?.push(action.payload);
      })

      // Unfollow
      .addCase(unfollow.fulfilled, (state, action) => {
        if (action.payload) {
          const index = state.following.followings?.findIndex(
            (following) => following.username === action.payload?.username
          );
          if (index) state.following.followings?.splice(index, 1);
        }
      })

      // Create Chat
      .addCase(createChat.fulfilled, (state, action) => {
        if (action.payload) {
          const user = state.SearchResults.users?.find((user) => user.username === action.payload);
          if (user) user.hasChat = true;
        }
      });
  },
});

export default homeSlice.reducer;
export const { toggleFollow } = homeSlice.actions;
