import { Card, CardContent, CardFooter } from "@/components/ui/card";
import LikeButton from "@/components/buttons/likeButton";
import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { ArbaicRegex } from "@/utils/Regex";
import { timeFormat } from "@/utils/timeFormat";
import { UserPostsResponse } from "../../utils/types";

interface PostsProps {
  post: UserPostsResponse["posts"][0];
}

const url = import.meta.env.VITE_IMAGE_URL;
const index: FC<PostsProps> = (props) => {
  const post = props.post;
  const navigate = useNavigate();

  let img;
  if (post.contentPicture) {
    img = (
      <img
        className="rounded-3xl object-cover md:max-w-[400px] border-2 border-gray-800 bg-gray-900 ml-auto mt-2"
        src={url + post.contentPicture}
      />
    );
  }
  return (
    <Card className="bg-gray-800 border-gray-800 mb-3 border-b-0 rounded-2xl">
      <CardContent
        className="text-white font-medium mb-2 p-2 pt-4 ml-[50px] cursor-pointer"
        onClick={() => navigate(`/post/${post.id}`)}>
        <p className={`mb-[20px] text-md md:text-lg ${post.content.charAt(0).match(ArbaicRegex) && "text-right"}`}>
          {post.content}
        </p>
        {img}
      </CardContent>
      <CardFooter className="bg-gray-700 rounded-b-2xl border-b border-gray-800">
        <div className="flex flex-1 justify-between text-white mt-3">
          <div className="flex items-center">
            <LikeButton isLiked={post.isLiked} postId={post.id} />
            <span className="ml-1 mb-1 font-semibold text-xs md:text-lg text-gray-300">{post.likesCount}</span>
          </div>
          <div className="flex ml-auto items-center text-xs text-gray-400">{timeFormat(post.createdAt)}</div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default index;
