import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { timeFormat } from "@/utils/timeFormat";
import { PostType } from "@/features/home/utils/types";
import BackButton from "@/components/buttons/backButton";
import LikeButton from "@/components/buttons/likeButton";
import { getInitials } from "@/utils/getInitials";

interface PostsProps {
  post: PostType;
}

const url = import.meta.env.VITE_IMAGE_URL;
const index: React.FC<PostsProps> = ({ post }) => {
  return (
    <Card className="bg-gray-800 md:border-gray-800 border-0 pt-3 md:mx-[100px] mt-3 rounded-t-xl">
      <CardHeader className="text-white">
        <BackButton className="ml-1 mb-3 text-2xl" />
        <CardTitle className="flex items-center justify-start text-sm">
          <Avatar className="border-gray-600 border">
            <AvatarImage src={url + post.userResponse.profilePicture} />
            <AvatarFallback>{getInitials(post.userResponse.name)}</AvatarFallback>
          </Avatar>
          <div className="flex flex-col justify-start ml-3 text-xs md:text-base text-gray-300">
            <span className="block">{post.userResponse.name}</span>
            <span className="block">@{post.userResponse.username}</span>
          </div>
          <div className="ml-auto text-xs text-gray-400">{timeFormat(post.createdAt)}</div>
        </CardTitle>
      </CardHeader>
      <CardContent className="text-white font-medium mb-2 ml-12">
        <p className="mb-5 opacity-80 text-justify text-lg md:text-3xl">{post.content}</p>
        {post?.contentPicture && (
          <img
            className="object-cover shadow-inner opacity-50 hover:opacity-80 bg-gray-950 ml-auto rounded-3xl w-full h-[500px]"
            src={url + post.contentPicture}
            alt="Landscape photograph by Tobias Tullius"
          />
        )}
      </CardContent>
      <CardFooter className="mt-1 border-gray-900 border-t border-b-4">
        <div className="flex flex-1 justify-between text-white mt-3">
          <div className="flex items-center">
            <LikeButton postId={post.id} isLiked={post.isLiked} />
            <span className="ml-3 font-semibold text-lg">{post.likesCount}</span>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default index;
