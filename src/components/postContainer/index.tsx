import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import LikeButton from "../buttons/likeButton";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FC } from "react";
import { PostType } from "@/features/home/utils/types";
import { useNavigate } from "react-router-dom";
import { ArbaicRegex } from "@/utils/Regex";
import { getInitials } from "@/utils/getInitials";
import { timeFormat } from "@/utils/timeFormat";

interface PostsProps {
  post: PostType;
}

const url = import.meta.env.VITE_IMAGE_URL;

const index: FC<PostsProps> = (props) => {
  const post: PostType = props.post;
  const navigate = useNavigate();

  return (
    <Card className="bg-gray-800 border-gray-800 mb-3 border-b-0 rounded-2xl">
      <CardHeader className="text-white">
        <CardTitle className="flex items-center justify-start">
          <Avatar
            onClick={() => navigate("/user/" + post.userResponse.username)}
            className="border-gray-500 border-2 w-10 md:w-14 h-10 md:h-14 cursor-pointer">
            <AvatarImage src={url + post.userResponse.profilePicture} />
            <AvatarFallback className="bg-gray-900 font-semibold text-base">
              {getInitials(post.userResponse.name)}
            </AvatarFallback>
          </Avatar>
          <div className="flex flex-col justify-start ml-3 text-sm text-gray-300">
            <span className="block">{post.userResponse.name}</span>
            <span className="block">@ {post.userResponse.username}</span>
          </div>
          <div className="flex ml-auto items-center text-xs text-gray-400">{timeFormat(post.createdAt)}</div>
        </CardTitle>
      </CardHeader>
      <CardContent
        className="text-white font-medium mb-2 ml-[50px] cursor-pointer"
        onClick={() => navigate(`/post/${post.id}`)}>
        {post.content && (
          <p className={`mb-[20px] text-md md:text-lg ${post.content.charAt(0).match(ArbaicRegex) && "text-right"}`}>
            {post.content}
          </p>
        )}
        {post.contentPicture && (
          <img
            className="rounded-3xl object-cover md:max-w-[400px] border-2 border-gray-800 bg-gray-900 ml-auto mt-2"
            src={url + post.contentPicture}
            alt="Landscape photograph by Tobias Tullius"
          />
        )}
      </CardContent>
      <CardFooter className="bg-gray-700 rounded-b-2xl border-b border-gray-800">
        <div className="flex flex-1 justify-between text-white mt-3">
          <div className="flex items-center">
            <LikeButton isLiked={post.isLiked} postId={post.id} />
            <span className="ml-1 mb-1 font-semibold text-xs md:text-lg text-gray-300">{post.likesCount}</span>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default index;
