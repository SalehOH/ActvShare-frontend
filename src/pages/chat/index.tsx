import { useEffect, useRef, useState } from "react";
import TextInput from "./components/textInput";
import { useUserContext } from "@/hooks/useUserContext";
import useFetch from "./hooks/useFetch";
import useChatConnection from "./hooks/useChatConnection";
import { ApplicationUser } from "@/context/userContext";
import useHasState from "./hooks/useHasState";

const url = import.meta.env.VITE_IMAGE_URL;

function index() {
  
  const [messages, setMessages] = useState<JSX.Element[]>([]);
  const [otherUser, setOtherUser] = useState<ApplicationUser | null>(null);
  const { user } = useUserContext();
  const scrollableRef = useRef<HTMLDivElement>(null);
  const token = JSON.parse(localStorage.getItem("user") ?? "{}")["token"];
  const { id } = useHasState();

  useFetch(id, setMessages, token, user);
  const { connection } = useChatConnection(token, setMessages, user, id, setOtherUser);

  useEffect(() => {
    if (scrollableRef.current) {
      scrollableRef.current.scrollTop = scrollableRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="w-full md:w-[790px] mx-auto h-full md:h-[83vh] mt-1">
      <div className="bg-gray-800 w-[full] md:rounded-t-3xl min-h-[85.7vh] h-[85.7vh] md:h-full">
        {otherUser &&(
          <div className="flex flex-col justify-center items-center">
            <img className="h-8 md:h-12 w-8 md:w-12 rounded-full border border-gray-700 bg-gray-950" src={url+ otherUser?.profilePicture} alt="" />
            <span className="text-white font-semibold text-sm">{otherUser?.name}</span>
            <span className="text-gray-300 font-semibold text-xs">@{otherUser?.username}</span>
          </div>
        )}
        <div ref={scrollableRef} className="w-full h-[88%] overflow-y-auto p-1">
          {messages}
        </div>
      </div>
      <TextInput connection={connection} />
    </div>
  );
}

export default index;
