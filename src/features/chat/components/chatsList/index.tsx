import { useEffect } from "react";

import { useDispatcher } from "@/hooks/useDispatcher";
import { useSelector } from "react-redux";
import { selectChat } from "../../store/selectors";
import { fetchChats } from "../../store/actions";
import { useUser } from "@/hooks/useUser";

import ChatList from "./list";
import Loading from "./loading";
import BackButton from "@/components/buttons/backButton";

const sideMenu = () => {
  const dispatch = useDispatcher();
  const { chatList } = useSelector(selectChat);
  const user = useUser();

  useEffect(() => {
    if (!user) return;
    dispatch(fetchChats());
  }, []);

  return (
    <div className="w-full max-h-screen flex flex-col overflow-hidden">
      <div className="flex p-5 border-b-2 border-gray-600">
        <BackButton className="text-white text-2xl p-0 m-0" />
        <h1 className="mx-auto pr-4 text-white text-center font-bold text-2xl">Chats</h1>
      </div>
      <div className="overflow-auto flex-grow">
        {chatList.loading && <Loading />}
        {!chatList.loading && chatList?.list?.map((chat) => <ChatList key={chat.chatId} chat={chat} />)}
      </div>
    </div>
  );
};

export default sideMenu;
