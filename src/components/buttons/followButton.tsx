import { Button } from "@/components/ui/button";
import axios from "axios";
import { MdPersonAdd } from "react-icons/md";
import { user } from "../navbar/search";
import { useState } from "react";

const url = import.meta.env.VITE_API_URL;

const followButton = (props: {
  setIsFollowing?: Function;
  username: string;
  searchUser?: user;
}) => {
  const isFollowing = props.setIsFollowing;
  const username = props.username;
  const token = JSON.parse(localStorage.getItem("user") ?? "{}")["token"];
  const searchUser = props.searchUser;
  const [Followed, setFollowed] = useState(searchUser?.isFollowed);

  const handleFollow = async () => {
    try {
      await axios.post(
        url + "account/follow/" + username,
        {},
        {
          headers: {
            authorization: "Bearer " + token,
          },
        }
      );
      isFollowing && isFollowing(true);
      searchUser && setFollowed(true);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      {!Followed&& (
        <Button
          onClick={handleFollow}
          variant="outline"
          size="icon"
          className="bg-gray-900 border-0 text-xs md:text-2xl rounded-xl mr-2"
        >
          <MdPersonAdd />
        </Button>
      )}
    </>
  );
};

export default followButton;
