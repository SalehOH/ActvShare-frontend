import { z, ZodType } from "zod";

export type SignupData = {
  name: string;
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

const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/;

const FormSchema: ZodType<SignupData> = z
  .object({
    name: z.string().min(1),
    username: z
      .string()
      .min(4)
      .regex(/^[A-Za-z]+$/),
    email: z.string().email().min(7),
    password: z
      .string()
      .regex(
        passwordRegex,
        "must contain a special character, a number, a lowercase and an uppercase letter and must be at least 8 characters long"
      ),
    confirmPassword: z.string(),
  })
  .refine((data) => (passwordRegex.test(data.password) ? data.password === data.confirmPassword : true), {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export { FormSchema, labelClass, inputClass };
