import MessageSent from "../components/messageSent";
import MessageReceived from "../components/messageReceived";
import { MessageType } from "./types";

export const mapMessages = (username: string, messages: MessageType[]) => {
  return messages.map((message) => {
    if (message.sender === username) {
      return <MessageSent key={message.id} message={message} />;
    } else {
      return <MessageReceived key={message.id} message={message} />;
    }
  });
};
