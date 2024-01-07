import type { RootState } from "@/store";

export const getUser = (state: RootState) => state.auth.user;

export const selectIsLoading = (state: RootState) => state.auth.loading;

export const selectError = (state: RootState) => state.auth.error;
