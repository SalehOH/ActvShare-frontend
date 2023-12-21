import React from "react";
import Followers from "./followersCard";
import Loading from "./followersCard/loading";
import { FaUserGroup } from "react-icons/fa6";
import axios from "axios";
import { FollowingUser } from "../../utils/types";
import { useUserContext } from "@/hooks/useUserContext";
import useRestrictUser from "../../hooks/useRestrictUser";
import useSetTab from "../../hooks/useSetTab";



const url = import.meta.env.VITE_API_URL + "account/following/";

const index = () => {
  const { user } = useUserContext();
  useRestrictUser(undefined, user)
  useSetTab(1)
  const [loading, setLoading] = React.useState(true);
  const [followings, setFollowings] = React.useState<FollowingUser[]>([]);
  React.useEffect(() => {
    const getFollowings = async () => {
      try {
        const response = await axios.get(url, {
          headers: { Authorization: `Bearer ${user?.token}` },
        });
        setFollowings(response.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    if(user) getFollowings();
  }, []);

  return (
    <div className="w-full bg-gray-800 rounded-xl p-4 border-gray-700 border-opacity-70 text-white font-semibold">
      <header className="flex items-center justify-center font-bold md:text-2xl">
        <FaUserGroup />
        <span className="ml-2">Followers</span>
      </header>
      {loading ? (
        <div className="w-full">
          <Loading />
          <Loading />
          <Loading />
        </div>
      ) : (
        <div className="w-full" id="followings">
          {followings &&
            followings.map((user) => {
              return <Followers key={user.id} followedUser={user} isFollowing={true} />;
            }, [])}
        </div>
      )}
    </div>
  );
};

export default index;
