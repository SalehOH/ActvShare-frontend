import React from "react";
import Followers from "./followersCard";
import Loading from "./followersCard/loading";
import { FaUserGroup } from "react-icons/fa6";
import useSetTab from "../../hooks/useSetTab";

import { selectFollowing } from "../../store/selectors";
import { useSelector } from "react-redux";
import { useDispatcher } from "@/hooks/useDispatcher";
import { fetchFollowings } from "../../store/actions";

const index = () => {
  const { followings, loading } = useSelector(selectFollowing);
  const dispatch = useDispatcher();

  useSetTab(1);

  React.useEffect(() => {
    if (!followings) dispatch(fetchFollowings());
  }, []);

  let content;
  
  if (loading) {
    content = <Loading />;
  } else if (followings?.length === 0) {
    content = <div className="text-center text-white font-semibold">You are not following anyone</div>;
  } else {
    content = (
      <div className="w-full" id="followings">
        {followings?.map((user) => {
          return <Followers key={user.username} followedUser={user} isFollowing={true} />;
        })}
      </div>
    );
  }
  return (
    <div className="w-full bg-gray-800 rounded-xl p-4 border-gray-700 border-opacity-70 text-white font-semibold">
      <header className="flex items-center justify-center font-bold md:text-2xl">
        <FaUserGroup />
        <span className="ml-2">Followers</span>
      </header>
      {content}
    </div>
  );
};

export default index;
