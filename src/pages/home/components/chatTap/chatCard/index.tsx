import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useNavigate } from "react-router-dom";
import moment from "moment";

export interface Props {
  chat: {
    id: string;
    otherUser: string;
    otherUserName: string;
    otherUserImage: string;
    createdAt: string;
    lastMessage: string;
  };
}
const imageUrl = import.meta.env.VITE_IMAGE_URL;

const index = (props: Props) => {
  const { chat } = props;
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/chat", { state: { chatId: chat.id } });
  };
  return (
    <div
      className="flex flex-col w-full bg-gray-950 rounded-3xl p-2 md:p-4 text-gray-200 hover:border-gray-600 border-2 border-transparent cursor-pointer my-3"
      onClick={handleClick}
    >
      <div className="flex w-full">
        <Avatar>
          <AvatarImage
            src={imageUrl + chat.otherUserImage}
            alt={chat.otherUser}
          />
          <AvatarFallback>{chat.otherUser.charAt(0)}</AvatarFallback>
        </Avatar>
        <div className="flex flex-col font-semibold text-base">
          <h1 className="ml-5">{chat.otherUserName}</h1>
          <h1 className="ml-5 text-sm text-gray-300">@{chat.otherUser}</h1>
        </div>
      </div>
      <div className=" ml-[60px] mt-3 font-medium text-base">
        {chat.lastMessage && (
          <p className="text-ellipsis overflow-hidden">{chat.lastMessage}</p>
        )}
      </div>
      <span className="ml-auto p-2 font-bold text-xs md:text-lg text-gray-400">
        {moment(chat.createdAt, "YYYY-MM-DD HH:mm:ss").fromNow()}
      </span>
    </div>
  );
};

export default index;
