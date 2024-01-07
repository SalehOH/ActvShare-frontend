import { useState, useRef, FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { BiSolidSend } from "react-icons/bi";
import ImageButton from "@/components/buttons/imageButton";
import { ArbaicRegex } from "@/utils/Regex";
import { helper } from "./utils";
import { useDispatcher } from "@/hooks/useDispatcher";
import { addPost } from "@/features/home/store/actions";

const index = () => {
  const hiddenImageInput = useRef<HTMLInputElement>(null);
  const [content, setContent] = useState<string>("");
  const { imagePreview, showImage, setImagePreviw, setContentPicture, contentPicture } = helper();
  const dispatch = useDispatcher();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    dispatch(addPost({ content, contentPicture }));
    setImagePreviw("");
    setContent("");
  };
  return (
    <>
      <form encType="multipart/form-data" onSubmit={handleSubmit}>
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
                ${content && content.charAt(0).match(ArbaicRegex) && "text-right"} resize-none
              `}
              placeholder="Write a Post..."
              spellCheck={true}
              value={content}
              maxLength={180}
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setContent(e.target.value)}
            />
          </div>
          <input
            ref={hiddenImageInput}
            onChange={(e) => showImage(e)}
            type="file"
            accept="image/*"
            style={{ display: "none" }}
          />
          {imagePreview && (
            <div className="relative w-fit">
              <img
                src={imagePreview}
                className="max-h-32 w-auto max-w-xs mr-auto ml-2 my-2 p-2 border-yellow-100 border-[1px] border-opacity-25 rounded-md"
              />
              <div className="absolute -top-3 -right-2 p-1 font-semibold text-white on hover:text-red-600">
                <button
                  type="button"
                  onClick={() => {
                    setImagePreviw("");
                    setContentPicture(undefined);
                  }}>
                  X
                </button>
              </div>
            </div>
          )}
          <div className="flex items-center justify-between px-3 py-2 border-t border-gray-600">
            <div className="flex pl-0 space-x-1">
              <span className="sr-only">Attach file</span>
              <ImageButton onClick={() => hiddenImageInput.current?.click()} />
            </div>
            <Button
              type="submit"
              variant="outline"
              size="icon"
              className="inline-flex items-center text-white bg-black rounded-lg focus:ring-4 focus:ring-blue-900 md:hover:bg-blue-700 md:hover:text-white  border-0">
              <BiSolidSend />
            </Button>
          </div>
        </div>
      </form>
    </>
  );
};

export default index;
