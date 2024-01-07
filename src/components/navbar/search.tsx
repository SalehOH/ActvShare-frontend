import { Dialog, DialogContent, DialogHeader, DialogTrigger } from "@/components/ui/dialog";
import { FaSistrix } from "react-icons/fa6";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import debounce from "lodash.debounce";
import { ChangeEvent, useEffect, useMemo, useRef, useState } from "react";
import UnfollowButton from "../buttons/unfollowButton";
import FollowButton from "../buttons/followButton";
import ChatButton from "../buttons/newChatButton";
import { useDispatcher } from "@/hooks/useDispatcher";
import { getSearchedUsers } from "@/features/home/store/actions";
import { useSelector } from "react-redux";
import { selectSearchUsers } from "@/features/home/store/selectors";
import { useUser } from "@/hooks/useUser";

export type SearchUser = {
  name: string;
  username: string;
  profilePicture: string;
  isFollowed: boolean;
  hasChat: boolean;
};

const url = import.meta.env.VITE_IMAGE_URL;
const search = ({ windowWidth }: { windowWidth: number }) => {
  const [search, setSearch] = useState("");
  const { users, loading } = useSelector(selectSearchUsers);
  const dispatch = useDispatcher();
  const searchRef = useRef<HTMLInputElement>(null);
  const userAuth = useUser();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const debouncedResults = useMemo(() => {
    return debounce(handleChange, 500);
  }, []);

  useEffect(() => {
    if (search.length > 3) dispatch(getSearchedUsers(search));
  }, [search]);

  useEffect(() => {
    return () => {
      console.log("unmount");
      debouncedResults.cancel();
      dispatch(getSearchedUsers(""));
    };
  }, []);

  return (
    <>
      <Dialog>
        {windowWidth > 768 ? (
          <DialogTrigger
            onClick={() => searchRef.current?.focus()}
            className="flex items-center w-[35%] h-9 rounded-[11px] border-[1px] border-gray-600 bg-inherit font-medium text-white">
            <span className="pl-3">
              <FaSistrix />
            </span>
            <span className="ml-4"> Search..</span>
          </DialogTrigger>
        ) : (
          <DialogTrigger onClick={() => searchRef.current?.focus()}>
            <FaSistrix />
          </DialogTrigger>
        )}
        <DialogContent className="md:w-[768px] md:max-w-screen-lg  max-h-screen top-60 bg-gray-900 text-white border-transparent focus:outline-none focus:ring-4 focus:ring-gray-950">
          <DialogHeader>
            <div className="flex justify-start">
              <input
                ref={searchRef}
                type="text"
                onChange={debouncedResults}
                className="flex items-center border mx-2 w-[80%] h-9 rounded-[11px] border-gray-800 focus:border-gray-700 pl-[50px] bg-gray-800 font-medium text-lg border-transparent focus:outline-none focus:ring-4 focus:ring-gray-700"
                placeholder="Find users"
              />
              <FaSistrix className="absolute m-2 ml-5 mt-[10px]" />
            </div>
          </DialogHeader>
          <div>
            <ul className="flex-col justify-start items-center font-medium">
              {loading && (
                <div role="status" className="flex justify-center mt-5">
                  <svg
                    aria-hidden="true"
                    className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="currentColor"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentFill"
                    />
                  </svg>
                  <span className="sr-only">Loading...</span>
                </div>
              )}
              {users &&
                users.map((user) => {
                  return (
                    <li key={user.username} className="flex items-center p-3 hover:bg-gray-600 hover:rounded-md">
                      <Avatar>
                        <AvatarImage src={url + user.profilePicture} />
                      </Avatar>
                      <span className="ml-2">{user.username}</span>
                      {userAuth && (
                        <div className="flex ml-auto">
                          {!user.hasChat && <ChatButton username={user.username} />}
                          <div className="ml-2">
                            {!user.isFollowed && <FollowButton username={user.username} />}
                            {user.isFollowed && <UnfollowButton username={user.username} />}
                          </div>
                        </div>
                      )}
                    </li>
                  );
                })}
            </ul>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default search;
