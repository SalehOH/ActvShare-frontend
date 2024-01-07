import { MessageType } from "./types";

export const sortByDate = (messages: MessageType[] | null) => {
  if (!messages) return [];
  return messages.sort((a, b) => {
    return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
  });
};
