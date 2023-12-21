import { useEffect, useState } from "react";
import {
  HubConnection,
  HubConnectionBuilder,
  LogLevel,
} from "@microsoft/signalr";
import MessageSent from "../components/messageSent";
import MessageReceived from "../components/messageReceived";
import { MessageType } from "../utils/types";
import { ApplicationUser } from "@/context/userContext";

const url = import.meta.env.VITE_BASE_URL;
const useChatConnection = (
  token: string,
  setMessages: React.Dispatch<React.SetStateAction<JSX.Element[]>>,
  user: ApplicationUser | null,
  id: string | undefined,
  setOtherUser: React.Dispatch<React.SetStateAction<ApplicationUser | null>>
) => {
  const [connection, setConnection] = useState<HubConnection | null>(null);

  useEffect(() => {
    const coonect = async () => {
      try {
        const newConnection = new HubConnectionBuilder()
          .withUrl(`${url}hubs/chatHub?chatId=${id}`, {
            accessTokenFactory: () => `${token}`,
          })
          .configureLogging(LogLevel.Warning)
          .build();
        await newConnection.start();
        setConnection(newConnection);
      } catch (e) {
        console.log(e);
      }
    };
    if (id) coonect();
  }, [id]);

  useEffect(() => {
    if(connection)
    connection?.on("ReceiveInfo", (user: ApplicationUser) => {
      setOtherUser(user);
    });
  }, [connection]);
  
  useEffect(() => {
    connection?.on("ReceiveMessage", (message: MessageType) => {
      setMessages((messages) => [
        ...messages,
        message.sender === user?.username ? (
          <MessageSent key={message.id} message={message} />
        ) : (
          <MessageReceived key={message.id} message={message} />
        ),
      ]);
    });
  }, [connection]);
  return { connection };
};

export default useChatConnection;
