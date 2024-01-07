import TextInput from "../textInput";
import Loading from "./loading";

import { useEffect, useRef, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import { useSelector } from "react-redux";
import { selectChat } from "../../store/selectors";
import { useDispatcher } from "@/hooks/useDispatcher";
import { useUser } from "@/hooks/useUser";
import { fetchChat } from "../../store/actions";
import { mapMessages } from "../../utils/mapMessages";
import useChatConnection from "../../hooks/useChatConnection";
import BackButton from "@/components/buttons/backButton";

const url = import.meta.env.VITE_IMAGE_URL;
const Chat = () => {
  const [messagesElements, setMessagesElements] = useState<JSX.Element[]>([]);
  const { chat } = useSelector(selectChat);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const location = useNavigate();

  const dispatch = useDispatcher();
  const user = useUser();
  const { state } = useLocation();
  const chatId = state?.chatId;

  const { connection } = useChatConnection(setMessagesElements, user, chatId);
  useEffect(() => {
    if (!state || !user) {
      location("/", { replace: true });
    } else {
      dispatch(fetchChat(chatId));
    }
  }, [chatId]);

  useEffect(() => {
    if (!chat.messages || !user) return;
    const elements = mapMessages(user.username, chat.messages);
    setMessagesElements(elements);
  }, [chat]);

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollTop = messagesEndRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messagesElements]);

  if (chat.loading) return <Loading />;

  return (
    <div className="bg-gray-800 flex-grow overflow-hidden flex flex-col">
      <div className="flex items-center justify-center pt-3 border-b-4 pb-2 border-gray-700">
        <BackButton className="text-white ml-2 mr-auto md:hidden" />
        <div className="flex flex-col justify-center items-center mr-4 md:mr-0 md:mx-auto">
          <img
            className="h-8 md:h-12 w-8 md:w-12 rounded-full border border-gray-700 bg-gray-950"
            src={url + chat.user?.profilePicture}
          />
          <span className="text-white mt-1 font-semibold text-sm md:text-base">{chat.user?.name}</span>
          <span className="text-gray-300 font-semibold text-xs md:text-base">@{chat.user?.username}</span>
        </div>
        <div className="ml-auto"></div>
      </div>
      <div className="p-1 overflow-auto flex-grow px-3" ref={messagesEndRef}>
        {messagesElements}
      </div>
      <TextInput connection={connection} />
    </div>
  );
};

export default Chat;
