import { UserResponse } from "@/features/home/utils/types";

export type MessageType = {
  id: string;
  content: string;
  sender: string;
  createdAt: string;
};

export type ChatType = {
  user: UserResponse | null;
  messages: MessageType[] | null;
  loading: boolean;
  error?: string | any;
};

type chatSideMenuType = {
  list: ChatListType[] | null;
  loading: boolean;
  error?: string | any;
};
export type ChatListType = {
  chatId: string;
  user: UserResponse;
  lastMessage: string;
  lastMessageSentAt: string;
};
export type ChatSliceType = {
  chat: ChatType;
  chatList: chatSideMenuType;
};
