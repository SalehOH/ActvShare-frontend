import { createBrowserRouter } from "react-router-dom";
import ProtectedRoute from "./protectedRoute";

import Home from "@/features/home";
import Post from "@/features/post";
import Auth from "@/features/authentication";
import Chat from "@/features/chat";
import Navbar from "../components/navbar";
import User from "../features/user";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/post/:id",
        element: <Post />,
      },
      {
        path: "/auth/:pageName",
        element: <Auth />,
      },
      {
        path: "/chat",
        element: <ProtectedRoute element={<Chat />} />,
      },
      {
        path: "/user/:username",
        element: <User />,
      },
    ],
  },
]);
