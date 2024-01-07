import { FaMessage } from "react-icons/fa6";
import Chat from "./chatCard";
import Loading from "./chatCard/loading";
import { useEffect } from "react";
import useSetTab from "../../hooks/useSetTab";

import { selectChat } from "../../store/selectors";
import { useSelector } from "react-redux";
import { useDispatcher } from "@/hooks/useDispatcher";
import { fetchChats } from "../../store/actions";

const index = () => {
  useSetTab(2);
  const { chats, loading } = useSelector(selectChat);
  const dispatch = useDispatcher();

  useEffect(() => {
    if (!chats) dispatch(fetchChats());
  }, []);

  let content;
  if (loading) {
    content = <Loading />;
  } else if (chats?.length === 0) {
    content = <div className="text-center text-white font-semibold">You have haven't start any chat</div>;
  } else {
    content = (
      <div id="chats">
        {chats?.map((chat) => {
          return <Chat key={chat.chatId} chat={chat} />;
        })}
      </div>
    );
  }
  return (
    <div className="w-full bg-gray-800 rounded-xl p-4 border-gray-700 border-opacity-70 text-white">
      <header className="flex items-center justify-center font-bold md:text-2xl">
        <FaMessage />
        <span className="ml-2">Chat</span>
      </header>
      <section className="mx-1 md:mx-5 my-5">{content}</section>
    </div>
  );
};

export default index;
