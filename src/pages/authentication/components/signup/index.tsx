import Layout from "../Layout/index";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  FormSchema,
  labelClass,
  inputClass,
  SignupData,
} from "../../utils/FormSchema";
import axios from "axios";
import ImageButton from "../../utils/imageButton";
import React from "react";
import { useUserContext } from "@/hooks/useUserContext";
import { Navigate } from "react-router-dom";

const url = import.meta.env.VITE_REGISTER_URL;

const index = () => {
  const [profileImage, setProfileImage] = React.useState<File | null>(null);
  const { user, addUser } = useUserContext();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupData>({ resolver: zodResolver(FormSchema) });

  const send = async (data: SignupData) => {
    try {
      const formData = new FormData();
      formData.append("name", "Saleh Alhussaini");
      formData.append("username", data.username);
      formData.append("email", data.email);
      formData.append("password", data.password);
      formData.append("confirmPassword", data.confirmPassword);
      if (profileImage) formData.append("profileImage", profileImage as Blob);

      const respone = await axios.post(url, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      addUser(respone.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      {user && <Navigate to="/" replace={true} />}
      <form onSubmit={handleSubmit(send)}>
        <Layout>
          <div className="relative mb-3">
            <input
              type="username"
              id="username"
              placeholder=" "
              {...register("username")}
              className={`${inputClass} ${
                errors.email
                  ? "border-red-400 focus:border-red-700"
                  : "border-gray-600 focus:border-blue-600"
              }`}
            />
            <label
              htmlFor="username"
              className={`${labelClass} ${
                errors.email
                  ? "text-red-500 peer-focus:text-red-700"
                  : "text-gray-500 peer-focus:text-blue-600"
              }`}
            >
              Username
            </label>
          </div>
          {/* email feild */}
          <div className="relative mb-10">
            <input
              type="email"
              id="email"
              placeholder=" "
              {...register("email")}
              className={`${inputClass} ${
                errors.email
                  ? "border-red-400 focus:border-red-700"
                  : "border-gray-600 focus:border-blue-600"
              }`}
            />
            <label
              htmlFor="email"
              className={`${labelClass} ${
                errors.email
                  ? "text-red-500 peer-focus:text-red-700"
                  : "text-gray-500 peer-focus:text-blue-600"
              }`}
            >
              Email
            </label>
          </div>
          {errors.email && (
            <span className="text-red-600 text-sm mb-2">
              {errors.email?.message}
            </span>
          )}
          {/* password feild */}
          <div className="relative mb-3">
            <input
              type="password"
              id="password"
              placeholder=" "
              {...register("password")}
              className={`${inputClass} ${
                errors.password
                  ? "border-red-400 focus:border-red-700"
                  : "border-gray-600 focus:border-blue-600"
              }`}
            />
            <label
              htmlFor="password"
              className={`${labelClass} ${
                errors.password
                  ? "text-red-500 peer-focus:text-red-700"
                  : "text-gray-500 peer-focus:text-blue-600"
              }`}
            >
              Password
            </label>
          </div>
          {errors.password && (
            <span className="text-red-600 text-sm mb-2">
              {errors.password?.message}
            </span>
          )}
          {/* confirm password feild */}
          <div className="relative mb-3">
            <input
              type="password"
              id="confirmPassword"
              placeholder=" "
              {...register("confirmPassword")}
              className={`${inputClass} ${
                errors.confirmPassword
                  ? "border-red-400 focus:border-red-700"
                  : "border-gray-600 focus:border-blue-600"
              }`}
            />
            <label
              htmlFor="confirmPassword"
              className={`${labelClass} ${
                errors.confirmPassword
                  ? "text-red-500 peer-focus:text-red-700"
                  : "text-gray-500 peer-focus:text-blue-600"
              }`}
            >
              Password
            </label>
          </div>
          {errors.confirmPassword && (
            <span className="text-red-600 text-sm mb-2">
              {errors.confirmPassword?.message}
            </span>
          )}
          <div className="flex items-center">
            <ImageButton
              onFileSelect={setProfileImage}
              className=" bg-gray-900 border-0 rounded-3xl hover:bg-gray-500"
            />
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
