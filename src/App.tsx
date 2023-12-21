import { UserProvider } from "@/context/userContext";
import {RouterProvider } from "react-router-dom";
import { router } from "@/routes";


function App() {
  return (
    <>
      <UserProvider>
        <RouterProvider router={router} />
      </UserProvider>
    </>
  );
}

export default App;
