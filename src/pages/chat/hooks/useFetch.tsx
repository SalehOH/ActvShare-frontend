import axios from "axios";
import { useEffect } from "react";
import { MessageType } from "../utils/types";
import { ApplicationUser } from "@/context/userContext";
import MessageSent from "../components/messageSent";
import MessageReceived from "../components/messageReceived";

const url = import.meta.env.VITE_API_URL;
const useFetch = (
  id: undefined | string,
  setMessages: React.Dispatch<React.SetStateAction<JSX.Element[]>>,
  token: string,
  user: ApplicationUser | null
) => {
  useEffect(() => {
    const getAllmessages = async () => {
      try {
        const response = await axios.get(
          `${url}chat/${id}`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setMessages(
          response.data.map((message: MessageType) => {
            return message.sender === user?.username ? (
              <MessageSent key={message.id} message={message} />
            ) : (
              <MessageReceived key={message.id} message={message} />
            );
          })
        );
      } catch (err) {
        console.log(err, "error");
      }
    };
    if (id) getAllmessages();
  }, [id]);
};
export default useFetch;
