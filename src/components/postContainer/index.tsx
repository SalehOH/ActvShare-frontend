import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import LikeButton from "../buttons/likeButton";
import ShareButton from "../buttons/shareButton";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import React from "react";
import { PostType } from "@/pages/home/utils/types";
import { useNavigate } from "react-router-dom";
import { ArbaicRegex } from "@/utils/Regex";
import moment from "moment";

interface PostsProps {
  post: PostType;
}

const url = import.meta.env.VITE_IMAGE_URL;

const index: React.FC<PostsProps> = (props) => {
  const post: PostType = props.post;
  const navigate = useNavigate();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate(`/post/${post.id}`);
  };

  return (
    <Card className=" bg-gray-800 border-gray-800 mb-3 border-b-0 rounded-2xl">
      <CardHeader className="text-white">
        <CardTitle className="flex items-center justify-start">
          <Avatar className="border-gray-500 border-2 w-10 md:w-14 h-10 md:h-14">
            {post.userProfilePic && (
              <AvatarImage src={url + post.userProfilePic} />
            )}
            <AvatarFallback className="bg-gray-900 font-semibold text-base">
              {`${post.name?.charAt(0)} ${post.name?.charAt(
                post.name?.length - 1
              )}`}
            </AvatarFallback>
          </Avatar>
          <div className="flex flex-col justify-start ml-3 text-sm text-gray-300">
            <span className="block">{post.name}</span>
            <span className="block">@ {post.username}</span>
          </div>
          <div className="flex ml-auto items-center text-xs text-gray-400">
            {moment(post?.createdAt, "YYYY-MM-DD HH:mm:ss").fromNow()}
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent
        className="text-white font-medium mb-2 ml-[50px] cursor-pointer"
        onClick={handleClick}
      >
        <p className={`mb-[20px] text-sm md:text-base ${post.content.charAt(0).match(ArbaicRegex) && "text-right"}`}>{post.content}</p>
        {post.imagePath && (
          <img
            className="rounded-3xl object-cover md:max-w-[400px] border-2 border-gray-800 bg-gray-900 ml-auto mt-2"
            src={url + post.imagePath}
            alt="Landscape photograph by Tobias Tullius"
          />
        )}
      </CardContent>
      <CardFooter className="bg-gray-700 rounded-b-2xl border-b border-gray-800">
        <div className="flex flex-1 justify-between text-white mt-3">
          <div className="flex items-center">
            <LikeButton />
            <span className="ml-3 font-semibold text-lg">{post.likes}</span>
          </div>
          <ShareButton />
        </div>
      </CardFooter>
    </Card>
  );
};

export default index;
