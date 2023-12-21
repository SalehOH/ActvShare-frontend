import axios from "axios";
import { PostType } from "@/pages/home/utils/types"

const url: string = import.meta.env.VITE_API_URL;


export const handleSubmit = async (
  setNewPost: Function,
  content: string,
  image: File | null,
) => {

  const formData = new FormData();
  formData.append("content", content);

  if (image) formData.append("file", image, image.name);

  try {
    const response = await axios.post(url + "post/", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: "Bearer " + JSON.parse(localStorage.getItem("user") ?? "{}")["token"],
      },
    });

    const newPost: PostType = response.data;
    setNewPost(newPost);
  } catch (error) {
    console.log(error);
  }
};
