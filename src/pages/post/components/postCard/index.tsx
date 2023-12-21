import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FaRegHeart, FaRegShareFromSquare, FaArrowLeft } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { PostType } from "@/pages/home/utils/types";
import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";

interface PostsProps {
  post: PostType | null;
}

const index: React.FC<PostsProps> = (props) => {
  const post: PostType | null = props.post;

  return (
    <Card className="bg-gray-800 md:border-gray-800 border-0 pt-3 md:mx-[100px] mt-3 rounded-t-3xl">
      <CardHeader className="text-white">
        <Link className="ml-1 mb-3 text-2xl" to="/">
          <FaArrowLeft />
        </Link>
        <CardTitle className="flex items-center justify-start text-sm">
          <Avatar className="border-gray-600 border">
            {post?.userProfilePic && (
              <AvatarImage
                src={import.meta.env.VITE_IMAGE_URL + post?.userProfilePic}
              />
            )}
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="flex flex-col justify-start ml-3 text-base text-gray-300">
            <span className="block">{post?.name}</span>
            <span className="block">@{post?.username}</span>
          </div>
          <div className="ml-auto text-xs text-gray-400">
            {moment(post?.createdAt, "YYYY-MM-DD HH:mm:ss").fromNow()}
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="text-white font-medium mb-2 ml-12">
        <p className="mb-5 opacity-80 text-justify text-sm md:text-lg">
          {post?.content}
        </p>
        {post?.imagePath && (
          <img
            className="object-cover shadow-inner opacity-50 hover:opacity-80 bg-gray-950 ml-auto rounded-3xl w-full h-[500px]"
            src={"http://localhost:5129/images/" + post?.imagePath}
            alt="Landscape photograph by Tobias Tullius"
          />
        )}
      </CardContent>
      <CardFooter className="mt-1 border-gray-900 border-t border-b-4 shadow-2xl">
        <div className="flex flex-1 justify-between text-white mt-3">
          <div className="flex items-center">
            <Button
              variant="outline"
              size="icon"
              className="bg-inherit border-gray-500 hover:text-red-600 hover:bg-gray-500 hover:scale-150 transition-transform duration-300 ease-in-out"
            >
              <FaRegHeart />
            </Button>
            <span className="ml-3 font-semibold text-lg">{post?.likes}</span>
          </div>
          <Button
            variant="outline"
            size="icon"
            className="bg-inherit border-gray-500  hover:text-blue-800 hover:bg-gray-500 hover:scale-150 transition-transform duration-300 ease-in-out"
          >
            <FaRegShareFromSquare />
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default index;
