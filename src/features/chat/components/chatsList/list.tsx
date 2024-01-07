import { FC } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getInitials } from "@/utils/getInitials";
import { ChatType } from "@/features/home/utils/types";
import { timeFormat } from "@/utils/timeFormat";
import { useNavigate } from "react-router-dom";

interface ChatListProps {
  chat: ChatType;
}
const url = import.meta.env.VITE_IMAGE_URL;
const ChatList: FC<ChatListProps> = ({ chat }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/chat", { state: { chatId: chat.chatId } });
  };
  return (
    <div className="flex w-full text-white p-8 cursor-pointer hover:bg-gray-900 mb-6" onClick={handleClick}>
      <Avatar className="w-20 h-20">
        <AvatarImage src={url + chat.user.profilePicture} alt={chat.user.name} />
        <AvatarFallback>{getInitials(chat.user.name)}</AvatarFallback>
      </Avatar>
      <div className="ml-3">
        <div className="flex flex-col font-semibold text-base">
          <h1 className="text-lg 2xl:text-2xl">{chat.user.name}</h1>
          <h1 className=" text-sm 2xl:text-xl text-gray-300">@{chat.user.username}</h1>
        </div>
        <div className="mt-3 font-medium text-base 2xl:text-2xl">
          {chat.lastMessage && <p className="text-ellipsis overflow-hidden">{chat.lastMessage}</p>}
        </div>
      </div>
      <div className="flex justify-between mt-3 ml-auto my-auto 2xl:text-xl">{timeFormat(chat.lastMessageSentAt)}</div>
    </div>
  );
};

export default ChatList;
