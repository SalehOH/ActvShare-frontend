import { createSlice } from "@reduxjs/toolkit";
import { UserSlice } from "../utils/types";
import { getUser } from "../store/actions";

const initialState: UserSlice = {
  user: null,
  posts: null,
  loading: true,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUser.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload?.user || null;
      state.posts = action.payload?.posts || null;
    });
    builder.addCase(getUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default userSlice.reducer;
