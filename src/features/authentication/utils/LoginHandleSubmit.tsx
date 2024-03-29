import axios from "axios";

export const handleSubmit = async (
  e: React.FormEvent,
  username: string,
  password: string
) => {
  e.preventDefault();
  try {
    const response = await axios.post(import.meta.env.VITE_LOGIN_URL, {
      username: username,
      password: password,
    });
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};
