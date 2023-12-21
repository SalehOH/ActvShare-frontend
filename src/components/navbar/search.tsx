import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { FaSistrix } from "react-icons/fa6";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import debounce from "lodash.debounce";
import { ChangeEvent, useEffect, useMemo, useState } from "react";
import axios from "axios";
//import UnfollowButton from "../buttons/unfollowButton";
import FollowButton from "../buttons/followButton";

export type user = {
  username: string;
  name?: string;
  profilePicture?: string;
  isFollowed: boolean;
};

const search = ({windowWidth}: any) => {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState<user[]>([]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const debouncedResults = useMemo(() => {
    return debounce(handleChange, 500);
  }, []);

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const results = await axios.get(
          import.meta.env.VITE_API_URL + "account/users?username=" + search
        , {
          headers: {
            Authorization: "Bearer " + JSON.parse(localStorage.getItem("user")??"")["token"],
          }
        });
        console.log(results.data);
        setResults(results.data);
      } catch (error) {
        console.log(error);
      }
    };
    if (search.length > 3) fetchResults();
  }, [search],);

  return (
    <>
      <Dialog>
        {windowWidth > 768 ? (
          <DialogTrigger className="flex items-center w-[35%] h-9 rounded-[11px] border-[1px] border-gray-600 bg-inherit font-medium text-white">
            <span className="pl-3">
              <FaSistrix />
            </span>
            <span className="ml-4"> Search..</span>
          </DialogTrigger>
        ) : (
          <DialogTrigger>
            <FaSistrix />
          </DialogTrigger>
        )}
        <DialogContent className="md:w-[768px] md:max-w-screen-lg  max-h-screen top-60 bg-gray-900 text-white border-transparent focus:outline-none focus:ring-4 focus:ring-gray-950">
          <DialogHeader>
            <div className="flex justify-start">
              <input
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
              {results &&
                results.map((user) => {
                  return (
                    <li
                      key={user.username}
                      className="flex items-center p-3 hover:bg-gray-600 hover:rounded-md"
                    >
                      <Avatar>
                        <AvatarImage
                          src={
                            import.meta.env.VITE_IMAGE_URL + user.profilePicture
                          }
                        />
                      </Avatar>
                      <span className="ml-2">{user.username}</span>
                      <div className="ml-auto">
                        {!user.isFollowed && (
                          <FollowButton searchUser={user} username={user.username} />
                        )}
                      </div>
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
