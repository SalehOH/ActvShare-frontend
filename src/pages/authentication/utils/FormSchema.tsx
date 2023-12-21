import { z, ZodType } from "zod";

export type SignupData = {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  profileImage?: File;
};
const labelClass =
  "absolute text-sm duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4";
const inputClass =
  "block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-white bg-gray-700 border-0 border-b-2 appearance-nonetext-white focus:outline-none focus:ring-0 peer";

const FormSchema: ZodType<SignupData> = z
  .object({
    username: z
      .string()
      .min(4)
      .regex(/^[A-Za-z]+$/),
    email: z.string().email().min(7),
    password: z
      .string()
      .regex(
        new RegExp(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/
        ),
        "must contain a spical char"
      ),
    confirmPassword: z.string().min(1),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export { FormSchema, labelClass, inputClass, };