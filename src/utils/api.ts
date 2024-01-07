import axios from "axios";
import { RootState } from "@/store";
import { setUser } from "@/features/authentication/store";
import { ApplicationUser } from "./types";
import { Store } from "redux";

const api = axios.create({
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

let store: Store<RootState>;
export const injectStore = (_store: Store<RootState>) => {
  store = _store;
};

const getUser = () => {
  const user = store.getState().auth.user;
  return user;
};

api.interceptors.request.use(
  (config) => {
    const user = getUser();
    if (user) {
      config.headers.Authorization = `Bearer ${user.token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    const user = getUser();

    if (error.response.status === 401 && !originalRequest._retry && !user) {
      try {
        const response = await api.post(import.meta.env.VITE_REFRESH_URL);
        const user: ApplicationUser = response.data;
        console.log(user);

        store.dispatch(setUser(user));

        originalRequest.headers.Authorization = `Bearer ${user.token}`;

        try {
          const retryResponse = await api(originalRequest);
          return retryResponse;
        } catch (retryError) {
          console.log(retryError);
        }
      } catch (err) {
        console.log(err);
      }
    }

    return Promise.reject(error);
  }
);

export default api;
