import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import FollowButton from "@/components/buttons/followButton";
import UnfollowButton from "@/components/buttons/unfollowButton";
import { FollowingUser } from "@/pages/home/utils/types";
import { useState } from "react";
import NewChatButton from "@/components/buttons/newChatButton";
import axios from "axios";
import { useUserContext } from "@/hooks/useUserContext";

const url = import.meta.env.VITE_IMAGE_URL;
const chatUrl = import.meta.env.VITE_API_URL + "chat/create";

const index = (props: {
  isFollowing: boolean;
  followedUser: FollowingUser;
}) => {
  const [isFollowing, setIsFollowing] = useState(props.isFollowing);
  const FollowedUser = props.followedUser;

  const { user } = useUserContext();

  const handleClick = async () => {
    try {
      const response = axios.post(
        chatUrl,
        {
          user1: user?.username,
          user2: FollowedUser.followedUserUsername,
        },
        {
          headers: { Authorization: `Bearer ${user?.token}` },
        }
      );
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="flex items-center p-4 md:p-7 md:mx-7 font-bold bg-gray-950 rounded-3xl my-4 hover:bg-gray-900 cursor-pointer">
        <Avatar>
          <AvatarImage
            src={url + FollowedUser.followedUserProfilePic}
            alt="@shadcn"
          />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <h1 className="ml-5 text-sm md:text-2xl">{FollowedUser.followedUserName}</h1>
          <h1 className="ml-5 text-xs md:text-lg text-gray-300">
            @{FollowedUser.followedUserUsername}
          </h1>
        </div>
        <div className="ml-auto text-white">
          {isFollowing ? (
            <UnfollowButton
              setIsFollowing={setIsFollowing}
              username={FollowedUser.followedUserUsername}
            />
          ) : (
            <FollowButton
              setIsFollowing={setIsFollowing}
              username={FollowedUser.followedUserUsername}
            />
          )}
        </div>
        {!FollowedUser.hasChat && (
          <div className="text-white">
            <NewChatButton onClick={handleClick} />
          </div>
        )}
      </div>
    </>
  );
};

export default index;
