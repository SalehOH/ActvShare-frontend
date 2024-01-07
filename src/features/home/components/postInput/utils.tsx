import { useState, ChangeEvent } from "react";

export const helper = () => {
  const [contentPicture, setContentPicture] = useState<File | undefined>();
  const [imagePreview, setImagePreviw] = useState("");

  const showImage = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || undefined;
    console.log(file);
    setContentPicture(file);
    const reader = new FileReader();

    reader.onload = () => {
      setImagePreviw(reader.result as string);
    };
    if (file) reader.readAsDataURL(file);
  };

  return { contentPicture, imagePreview, showImage, setImagePreviw, setContentPicture };
};
