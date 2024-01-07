import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ReplyType } from "@/features/home/utils/types";
import { getInitials } from "@/utils/getInitials";
import { timeFormat } from "@/utils/timeFormat";

interface ReplyProps {
  reply: ReplyType;
}
const url = import.meta.env.VITE_IMAGE_URL;
const reply = (props: ReplyProps) => {
  const replyinfo: ReplyType = props.reply;

  return (
    <>
      <div className="flex border-b border-b-gray-800 p-3 w-full mb-2">
        <div className="mr-5">
          <Avatar className="border-gray-600 border m-2">
            <AvatarImage src={url + replyinfo.user.profilePicture} />
            <AvatarFallback>{getInitials(replyinfo.user.name)}</AvatarFallback>
          </Avatar>
        </div>
        <div className="w-full p-2">
          <span className="text-gray-300 text-sm ">@{replyinfo.user.username}</span>
          <span className="text-gray-700 text-sm ml-2">·</span>
          <span className="text-gray-300 text-xs ml-2">{timeFormat(replyinfo.createdAt)}</span>
          <p className="mt-1 mr-3">{replyinfo.content}</p>
        </div>
      </div>
    </>
  );
};

export default reply;
