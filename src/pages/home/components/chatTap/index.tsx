import { FaMessage } from "react-icons/fa6";
import Chat from "./chatCard";
import Loading from "./chatCard/loading";
import React from "react";
import axios from "axios";
import { useUserContext } from "@/hooks/useUserContext";
import { Props } from "./chatCard/index";
import useRestrictUser from "../../hooks/useRestrictUser";
import useSetTab from "../../hooks/useSetTab";


const url = import.meta.env.VITE_API_URL + "chat/all";

const index = () => {
  useSetTab(2);
  const { user } = useUserContext();
  useRestrictUser(undefined, user);

  const [loading, setLoading] = React.useState(true);
  const [chat, setChat] = React.useState<Props["chat"][]>([]);

  React.useEffect(() => {
    const getAllChat = async () => {
      try {
        const response = await axios.get(url, {
          headers: { Authorization: `Bearer ${user?.token}` },
        });
        setChat(response.data);
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    };
    if(user) getAllChat();
  }, []);

  return (
    <div className="w-full bg-gray-800 rounded-xl p-4 border-gray-700 border-opacity-70 text-white">
      <header className="flex items-center justify-center font-bold md:text-2xl">
        <FaMessage />
        <span className="ml-2">Chat</span>
      </header>
      <section id="chat" className="mx-1 md:mx-5 my-5">
        {loading ? (
          <div>
            <Loading />
            <Loading />
            <Loading />
          </div>
        ) : (
          <div id="chats">
            {chat.map((chat) => {
              return <Chat key={chat.id} chat={chat} />;
            })}
          </div>
        )}
      </section>
    </div>
  );
};

export default index;
