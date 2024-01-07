import { createSlice } from "@reduxjs/toolkit";
import { loginUser, signupUser, refreshUser, logoutUser } from "./actions";
import { ApplicationUser } from "@/utils/types";

export type AuthState = {
  loading: boolean;
  user: ApplicationUser | null;
  error?: string | unknown | null;
};

const initialState: AuthState = {
  loading: true,
  user: null,
  error: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser(state: AuthState, action) {
      state.user = action.payload;
    },
  },
  extraReducers: (builder) => {
    //refresh
    builder.addCase(refreshUser.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload;
    });

    //signup
    builder.addCase(signupUser.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload;
    });
    builder.addCase(signupUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    //login
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload;
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    //logout
    builder.addCase(logoutUser.fulfilled, (state) => {
      state.loading = false;
      state.user = null;
    });
  },
});

export const { setUser } = authSlice.actions;

export default authSlice.reducer;
