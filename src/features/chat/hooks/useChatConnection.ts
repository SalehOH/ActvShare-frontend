import { useEffect, useState } from "react";
import {
  HubConnection,
  HubConnectionBuilder,
  LogLevel,
} from "@microsoft/signalr";
import { MessageType } from "../utils/types";
import { mapMessages } from "../utils/mapMessages";
import { ApplicationUser } from "@/utils/types";

const useChatConnection = (
  setMessages: React.Dispatch<React.SetStateAction<JSX.Element[]>>,
  user: ApplicationUser | null,
  chatId: string | undefined
) => {
  const [connection, setConnection] = useState<HubConnection | null>(null);

  useEffect(() => {
    const coonect = async () => {
      try {
        console.log("connecting");
        const url = import.meta.env.VITE_CHATHUB_URL + chatId;
        const newConnection = new HubConnectionBuilder()
          .withUrl(url, {
            accessTokenFactory: () => `${user?.token}`,
          })
          .configureLogging(LogLevel.Warning)
          .build();
        await newConnection.start();
        setConnection(newConnection);
      } catch (e) {
        console.log(e);
      }
    };
    if (chatId && user) coonect();
  }, [chatId]);

  useEffect(() => {
    connection?.on("ReceiveMessage", (message: MessageType) => {
      setMessages((messages) => [
        ...messages,
        ...mapMessages(user!.username, [message]),
      ]);
    });
  }, [connection]);
  return { connection };
};

export default useChatConnection;
