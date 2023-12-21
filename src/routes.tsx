import { createBrowserRouter } from "react-router-dom";

import Home from "@/pages/home";
import Post from "@/pages/post";
import Auth from "@/pages/authentication";
import Chat from "@/pages/chat";
import Navbar from "./components/navbar";
import User from "./pages/user";

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
        element: <Chat />,
      },
      {
        path: "/user/:username",
        element: <User />,
      }
    ],
  },
]);
