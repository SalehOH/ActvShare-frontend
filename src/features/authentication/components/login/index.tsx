import Layout from "../Layout";
import ErrorAlert from "@/components/alerts/error";
import { useState } from "react";

import { loginUser } from "@/features/authentication/store/actions";
import { Navigate } from "react-router-dom";
import { useDispatcher } from "@/hooks/useDispatcher";
import { useUser } from "@/hooks/useUser";
import { useSelector } from "react-redux";
import { selectError } from "../../store/selectors";

const index = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatcher();
  const user = useUser();
  const error = useSelector(selectError) as string;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(loginUser({ username, password })).then(() => window.location.reload());
  };

  return (
    <div className="flex-col">
      {user && <Navigate to="/" replace={true} />}
      {error && <ErrorAlert message={error} />}

      <form onSubmit={(e) => handleSubmit(e)}>
        <Layout>
          <div className="relative mb-3">
            <input
              onChange={(e) => setUsername(e.target.value)}
              type="username"
              id="username"
              className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-white bg-gray-700 dark:bg-gray-700 border-0 border-b-2 border-gray-600 appearance-nonetext-white focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            />
            <label
              htmlFor="username"
              className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">
              Username
            </label>
          </div>
          <div className="relative mb-3">
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              id="password"
              className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-white bg-gray-700 dark:bg-gray-700 border-0 border-b-2 border-gray-600 appearance-nonetext-white focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            />
            <label
              htmlFor="password"
              className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">
              Password
            </label>
          </div>
          <button
            type="submit"
            className="text-white bg-gray-900 hover:bg-gray-950 focus:outline-none focus:ring-4 focus:ring-gray-300 font-semibold rounded-xl text-sm px-5 py-2.5 mx-24 mt-8">
            Submit
          </button>
        </Layout>
      </form>
    </div>
  );
};

export default index;
