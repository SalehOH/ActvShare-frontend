import { useUserContext } from "@/hooks/useUserContext";
import Layout from "../Layout";
import React from "react";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";

const url = import.meta.env.VITE_LOGIN_URL;
const index = () => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [showError, setShowError] = React.useState(false);
  const { user, addUser } = useUserContext();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post(url, {
        username: username,
        password: password,
      });
      addUser(response.data);
      navigate("/");
    } catch (error) {
      console.log(error);
      setShowError(true);
    }
  };

  return (
    <>
      {user && <Navigate to="/" replace={true} />}
      <form onSubmit={(e) => handleSubmit(e)}>
        <Layout>
          {showError && (
            <h1 className="text-red-500 font-medium text-center text-lg my-2">
              invalid email or password
            </h1>
          )}
          <div className="relative mb-3">
            <input
              onChange={(e) => {
                setUsername(e.target.value);
                setShowError(false);
              }}
              type="username"
              id="username"
              className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-white bg-gray-700 dark:bg-gray-700 border-0 border-b-2 border-gray-600 appearance-nonetext-white focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            />
            <label
              htmlFor="username"
              className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
            >
              Username
            </label>
          </div>
          <div className="relative mb-3">
            <input
              onChange={(e) => {
                setPassword(e.target.value);
                setShowError(false);
              }}
              type="password"
              id="password"
              className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-white bg-gray-700 dark:bg-gray-700 border-0 border-b-2 border-gray-600 appearance-nonetext-white focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            />
            <label
              htmlFor="password"
              className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
            >
              Password
            </label>
          </div>
          <button
            type="submit"
            className="text-white bg-gray-900 hover:bg-gray-950 focus:outline-none focus:ring-4 focus:ring-gray-300 font-semibold rounded-xl text-sm px-5 py-2.5 mx-24 mt-8"
          >
            Submit
          </button>
        </Layout>
      </form>
    </>
  );
};

export default index;
