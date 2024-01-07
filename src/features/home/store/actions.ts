import { createAsyncThunk } from "@reduxjs/toolkit";
import { deleteResource, get, post } from "@/utils/axiosWrapper";
import { ChatType, CreatePostType, FollowingUser, NotificationType, PostType } from "../utils/types";
import { isAxiosError } from "axios";
import { SearchUser } from "@/components/navbar/search";

export const fetchPosts = createAsyncThunk("home/fetchPosts", async (_, { rejectWithValue }) => {
  try {
    const url = import.meta.env.VITE_POST_URL;
    const response = await get<PostType[]>(url);

    return response.data;
  } catch (err: any) {
    return rejectWithValue(err.response.data);
  }
});

export const fetchChats = createAsyncThunk("home/fetchChats", async (_, { rejectWithValue }) => {
  try {
    const url = import.meta.env.VITE_CHAT_URL;
    const response = await get<ChatType[]>(url);

    return response.data;
  } catch (err: any) {
    return rejectWithValue(err.response.data);
  }
});

export const fetchFollowings = createAsyncThunk("home/fetchFollowings", async (_, { rejectWithValue }) => {
  try {
    const url = import.meta.env.VITE_FOLLOWEINGS_URL;
    const response = await get<FollowingUser[] | []>(url);

    return response.data;
  } catch (err: any) {
    return rejectWithValue(err.response.data);
  }
});

export const fetchNotifications = createAsyncThunk("home/fetchNotifications", async (_, { rejectWithValue }) => {
  try {
    const url = import.meta.env.VITE_NOTIFICATIONS_URL;
    const response = await get<NotificationType[] | []>(url);

    return response.data;
  } catch (err: any) {
    return rejectWithValue(err.response.data);
  }
});

export const addPost = createAsyncThunk("home/addPost", async (newPost: CreatePostType, { rejectWithValue }) => {
  try {
    const url = import.meta.env.VITE_POST_URL;
    const form = new FormData();
    form.append("Content", newPost.content);
    newPost.contentPicture && form.append("ContentPicture", newPost.contentPicture);

    const response = await post<PostType>(url, form, true);
    if (response.error) throw response.error;
    return response.data as PostType;
  } catch (err: any) {
    return rejectWithValue(err.response.data);
  }
});

export const getSearchedUsers = createAsyncThunk(
  "home/getSearchedUsers",
  async (searchedUser: string, { rejectWithValue }) => {
    try {
      const url = import.meta.env.VITE_SEARCH_URL + searchedUser;
      const response = await get<SearchUser[]>(url);

      return response.data;
    } catch (err: any) {
      if (isAxiosError(err))
        return rejectWithValue(err.response?.data);
      return null;
    }
  }
);

export const follow = createAsyncThunk("home/follow", 
  async (username: string, { rejectWithValue }) => {
  try {
    const url = import.meta.env.VITE_FOLLOW_URL + username;
    const response = await post<FollowingUser>(url);

    return response.data;
  } catch (err: any) {
    return rejectWithValue(err.response.data);
  }
});

export const unfollow = createAsyncThunk("home/unfollow", 
  async (username: string, { rejectWithValue }) => {
  try {
    const url = import.meta.env.VITE_UNFOLLOW_URL + username;
    const response = await post<FollowingUser>(url);

    return response.data;
  } catch (err: any) {
    return rejectWithValue(err.response.data);
  }
});

export const createChat = createAsyncThunk("home/createChat",
  async (username: string, { rejectWithValue }) => {
  try {
    const url = import.meta.env.VITE_CHAT_URL + username;
    const response = await post<boolean>(url);
    if (response.error) throw response.error;

    return username;
  } catch (err: any) {
    return rejectWithValue(err.response.data);
  }
});

export const removeLike = createAsyncThunk("home/removeLike",
  async (postId: string, { rejectWithValue }) => {
  try {
    const url = import.meta.env.VITE_POST_LIKE_URL + postId;
    const response = await deleteResource<boolean>(url);
    if (response.error) throw response.error;

    return postId;
  } catch (err: any) {
    return rejectWithValue(err.response.data);
  }
});

export const addLike = createAsyncThunk("home/addLike",
  async (postId: string, { rejectWithValue }) => {
  try {
    const url = import.meta.env.VITE_POST_LIKE_URL+ postId;
    const response = await post<boolean>(url);
    if (response.error) throw response.error;

    return postId;
  } catch (err: any) {
    return rejectWithValue(err.response.data);
  }
});