import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FaRegHeart, FaRegShareFromSquare } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import { ReplyType } from "@/pages/home/utils/types";
import moment from "moment";

interface ReplyProps {
  reply: ReplyType;
}

const reply = (props: ReplyProps) => {
  const replyinfo: ReplyType = props.reply;

  return (
    <>
      <div className="flex border-b border-b-gray-800 p-3 w-full mb-2">
        <div className="mr-5">
          <Avatar className="border-gray-600 border m-2">
            <AvatarImage
              src={import.meta.env.VITE_IMAGE_URL + replyinfo.userProfilePic}
            />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
        <div className="w-full p-2">
          <span className="text-gray-300 text-sm ">@{replyinfo.username}</span>
          <span className="text-gray-700 text-sm ml-2">·</span>
          <span className="text-gray-300 text-xs ml-2">
            {moment(replyinfo.createdAt, "YYYY-MM-DD HH:mm:ss").fromNow()}
          </span>
          <p className="mt-1 mr-3">{replyinfo.content}</p>
          <div className="flex flex-1 justify-end text-white mt-3">
            <Button
              variant="outline"
              size="icon"
              className="bg-inherit border-gray-900 hover:text-red-600 hover:bg-gray-800 hover:scale-150 transition-transform duration-300 ease-in-out mr-1"
            >
              <FaRegHeart />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="bg-inherit border-gray-900  hover:text-blue-800 hover:bg-gray-800 hover:scale-150 transition-transform duration-300 ease-in-out mr-3"
            >
              <FaRegShareFromSquare />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default reply;
