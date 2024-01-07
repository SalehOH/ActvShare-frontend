import { RouterProvider } from "react-router-dom";
import { router } from "@/router/routes";
import { useDispatcher } from "./hooks/useDispatcher";
import { useEffect, useState } from "react";
import { refreshUser } from "@/features/authentication/store/actions";
import { useUser } from "./hooks/useUser";
import { injectStore } from "@/utils/api";
import store from "@/store";
injectStore(store);

const App = () => {
  const dispatch = useDispatcher();
  const user = useUser();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("refreshing user", import.meta.env.VITE_BASE_URL);
    if (!user) dispatch(refreshUser()).then(() => setLoading(false));
  }, []);
  if (loading) return null;
  return <RouterProvider router={router} />;
};

export default App;
