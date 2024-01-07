import { RootState } from "@/store";
import { createSelector } from "@reduxjs/toolkit";

const selectHome = (state: RootState) => state.home;

export const selectPosts = createSelector(
  [selectHome],
  (homeState) => homeState.posts
);

export const selectChat = createSelector(
  [selectHome],
  (homeState) => homeState.chat
);

export const selectFollowing = createSelector(
  [selectHome],
  (homeState) => homeState.following
);

export const selectNotifications = createSelector(
  [selectHome],
  (homeState) => homeState.notifications
);

export const selectPostById = (postId: string) =>
  createSelector([selectHome], (homeState) =>
    homeState.posts.posts?.find((post) => post.id === postId)
);

export const selectSearchUsers = createSelector(
  [selectHome],
  (homeState) => homeState.SearchResults
);