import Layout from "../Layout/index";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { FormSchema, labelClass, inputClass, SignupData } from "../../utils/FormSchema";
import ImageButton from "../../utils/imageButton";
import React from "react";
import { Navigate } from "react-router-dom";
import { signupUser } from "@/features/authentication/store/actions";
import { useDispatcher } from "@/hooks/useDispatcher";
import { useUser } from "@/hooks/useUser";

const index = () => {
  const [profileImage, setProfileImage] = React.useState<File | null>(null);
  const dispatch = useDispatcher();
  const user = useUser();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupData>({ resolver: zodResolver(FormSchema) });

  const send = async (data: SignupData) => {
    const formData = new FormData();
    formData.append("Name", data.name);
    formData.append("Username", data.username);
    formData.append("Email", data.email);
    formData.append("Password", data.password);
    formData.append("ConfirmPassowrd", data.confirmPassword);
    if (profileImage) formData.append("ProfileImage", profileImage as Blob);

    dispatch(signupUser(formData));
  };

  return (
    <>
      {user && <Navigate to="/" replace={true} />}
      <form onSubmit={handleSubmit(send)}>
        <Layout>
          <div className="relative mb-3">
            <input
              type="name"
              id="name"
              placeholder=" "
              {...register("name")}
              className={`${inputClass} ${
                errors.email ? "border-red-400 focus:border-red-700" : "border-gray-600 focus:border-blue-600"
              }`}
            />
            <label
              htmlFor="name"
              className={`${labelClass} ${
                errors.email ? "text-red-500 peer-focus:text-red-700" : "text-gray-500 peer-focus:text-blue-600"
              }`}>
              Name
            </label>
          </div>
          <div className="relative mb-3">
            <input
              type="username"
              id="username"
              placeholder=" "
              {...register("username")}
              className={`${inputClass} ${
                errors.email ? "border-red-400 focus:border-red-700" : "border-gray-600 focus:border-blue-600"
              }`}
            />
            <label
              htmlFor="username"
              className={`${labelClass} ${
                errors.email ? "text-red-500 peer-focus:text-red-700" : "text-gray-500 peer-focus:text-blue-600"
              }`}>
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
                errors.email ? "border-red-400 focus:border-red-700" : "border-gray-600 focus:border-blue-600"
              }`}
            />
            <label
              htmlFor="email"
              className={`${labelClass} ${
                errors.email ? "text-red-500 peer-focus:text-red-700" : "text-gray-500 peer-focus:text-blue-600"
              }`}>
              Email
            </label>
          </div>
          {errors.email && <span className="text-red-600 text-sm mb-2">{errors.email?.message}</span>}
          {/* password feild */}
          <div className="relative mb-3">
            <input
              type="password"
              id="password"
              placeholder=" "
              {...register("password")}
              className={`${inputClass} ${
                errors.password ? "border-red-400 focus:border-red-700" : "border-gray-600 focus:border-blue-600"
              }`}
            />
            <label
              htmlFor="password"
              className={`${labelClass} ${
                errors.password ? "text-red-500 peer-focus:text-red-700" : "text-gray-500 peer-focus:text-blue-600"
              }`}>
              Password
            </label>
          </div>
          {errors.password && <span className="text-red-600 text-sm mb-2">{errors.password?.message}</span>}
          {/* confirm password feild */}
          <div className="relative mb-3">
            <input
              type="password"
              id="confirmPassword"
              placeholder=" "
              {...register("confirmPassword")}
              className={`${inputClass} ${
                errors.confirmPassword ? "border-red-400 focus:border-red-700" : "border-gray-600 focus:border-blue-600"
              }`}
            />
            <label
              htmlFor="confirmPassword"
              className={`${labelClass} ${
                errors.confirmPassword
                  ? "text-red-500 peer-focus:text-red-700"
                  : "text-gray-500 peer-focus:text-blue-600"
              }`}>
              Password
            </label>
          </div>
          {errors.confirmPassword && (
            <span className="text-red-600 text-sm mb-2">{errors.confirmPassword?.message}</span>
          )}
          <div className="flex items-center">
            <ImageButton
              onFileSelect={setProfileImage}
              className=" bg-gray-900 border-0 rounded-3xl hover:bg-gray-500"
            />
          </div>
          <button
            type="submit"
            className="text-white bg-gray-900 hover:bg-gray-950 focus:outline-none focus:ring-4 focus:ring-gray-300 font-semibold rounded-xl text-sm px-5 py-2.5 mx-24 mt-8">
            Submit
          </button>
        </Layout>
      </form>
    </>
  );
};

export default index;
