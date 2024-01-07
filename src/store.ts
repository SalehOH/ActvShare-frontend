import { configureStore } from "@reduxjs/toolkit";
import authReducer from "@/features/authentication/store";
import homeReducer from "@/features/home/store";
import postReducer from "@/features/post/store";
import chatReducer from "@/features/chat/store";
import userReducer from "@/features/user/store";

const store = configureStore({
  reducer: {
    auth: authReducer,
    home: homeReducer,
    post: postReducer,
    chat: chatReducer,
    user: userReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
