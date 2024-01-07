import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import FollowButton from "@/components/buttons/followButton";
import UnfollowButton from "@/components/buttons/unfollowButton";
import NewChatButton from "@/components/buttons/newChatButton";

import { FC } from "react";
import { FollowingUser } from "@/features/home/utils/types";
import { useNavigate } from "react-router-dom";

interface props {
  isFollowing: boolean;
  followedUser: FollowingUser;
}

const url = import.meta.env.VITE_IMAGE_URL;
const index: FC<props> = ({ isFollowing, followedUser }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate("/user/" + followedUser.username)}
      className="flex items-center p-4 md:p-7 md:mx-7 font-bold bg-gray-950 rounded-3xl my-4 hover:bg-gray-900 cursor-pointer">
      <Avatar>
        <AvatarImage src={url + followedUser.profilePicture} alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <div className="flex flex-col">
        <h1 className="ml-5 text-sm md:text-2xl">{followedUser.name}</h1>
        <h1 className="ml-5 text-xs md:text-lg text-gray-300">@{followedUser.username}</h1>
      </div>
      <div className="ml-auto text-white">
        {isFollowing ? (
          <UnfollowButton username={followedUser.username} />
        ) : (
          <FollowButton username={followedUser.username} />
        )}
      </div>
      {followedUser.hasChat && (
        <div className="text-white">
          <NewChatButton username={followedUser.username} />
        </div>
      )}
    </div>
  );
};

export default index;
