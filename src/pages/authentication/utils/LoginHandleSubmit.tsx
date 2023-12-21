import axios from "axios";
import { useUserContext } from "@/hooks/useUserContext";

export const handleSubmit = async (
  e: React.FormEvent,
  username: string,
  password: string
) => {
  const { addUser } = useUserContext();
  e.preventDefault();
  try {
    const response = await axios.post(import.meta.env.VITE_LOGIN_URL, {
      username: username,
      password: password,
    });
    console.log(response);
    addUser(response.data);
  } catch (error) {
    console.log(error);
  }
};
