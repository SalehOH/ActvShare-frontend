import React, { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { FaFilm } from "react-icons/fa6";
import { BiSolidSend } from "react-icons/bi";
import { PostType } from "@/pages/home/utils/types";
import Post from "@/components/postContainer";
import { handleSubmit } from "./utils";
import ImageButton from "../buttons/imageButton";
import { ArbaicRegex } from "@/utils/Regex";

const index = () => {
  const hiddenImageInput = useRef<HTMLInputElement>(null);

  const [imagePreview, setImagePreviw] = useState("");
  const [newPost, setNewPost] = useState<PostType>({
    id: 0,
    username: "",
    content: "",
    imagePath: "",
    likes: 0,
    createdAt: Date(),
  });

  const [image, setImage] = useState<File | null>(null);
  const [content, setContent] = useState<string>("");

  const showImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    console.log(file);
    setImage(file);
    const reader = new FileReader();

    reader.onload = () => {
      setImagePreviw(reader.result as string);
    };
    if (file) reader.readAsDataURL(file);
  };

  const handleImage = (e: React.MouseEvent) => {
    e.preventDefault();
    hiddenImageInput.current?.click();
  };

  return (
    <>
      <form
        encType="multipart/form-data"
        onSubmit={(e: React.FormEvent) => {
          e.preventDefault();
          handleSubmit(setNewPost, content, image);
          setImagePreviw("");
          setContent("")
        }}
      >
        <div className="w-full mb-4 border rounded-lg bg-gray-700 border-gray-600">
          <div className="px-4 py-2 rounded-t-lg bg-gray-800">
            <label htmlFor="post" className="sr-only">
              Your comment
            </label>
            <textarea
              id="post"
              rows={4}
              className={`
              w-full pl-3 p-2 text-sm border-0 bg-gray-800  text-white placeholder-gray-400 r
              esize-none selection:bg-fuchsia-300 selection:text-fuchsia-900 focus:outline-none focus:ring-2
            focus:ring-blue-700 rounded-md placeholder:p-1 font-medium
              ${content && content.charAt(0).match(ArbaicRegex) && "text-right"}
              `}
              placeholder="Write a Post..."
              required
              value={content}
              maxLength={180}
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                setContent(e.target.value)
              }
            ></textarea>
          </div>
          <input
            ref={hiddenImageInput}
            onChange={(e) => showImage(e)}
            type="file"
            accept="image/*"
            style={{ display: "none" }}
          />
          {imagePreview && (
            <img
              src={imagePreview}
              className="max-h-32 w-auto max-w-xs mr-auto ml-2 my-2 p-2 border-yellow-100 border-[1px] border-opacity-25 rounded-md"
            />
          )}
          <div className="flex items-center justify-between px-3 py-2 border-t border-gray-600">
            <div className="flex pl-0 space-x-1">
              <Button
                onClick={(e: React.MouseEvent) => e.preventDefault()}
                variant="outline"
                size="icon"
                className="inline-flex bg-inherit border-0 justify-center items-center p-2 rounded cursor-pointer text-gray-400 hover:text-white hover:bg-gray-600"
              >
                <FaFilm />
              </Button>
              <span className="sr-only">Attach file</span>
              <ImageButton onClick={(e: React.MouseEvent) => handleImage(e)} />
            </div>
            <Button
              type="submit"
              variant="outline"
              size="icon"
              className="inline-flex items-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-900 hover:bg-blue-800 border-0"
            >
              <BiSolidSend />
            </Button>
          </div>
        </div>
      </form>
      {newPost.content && <Post key={newPost.id} post={newPost} />}
    </>
  );
};

export default index;
