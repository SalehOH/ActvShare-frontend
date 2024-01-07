import { SearchUser } from "@/components/navbar/search";

export type ReplyType = {
  id: string;
  content: string;
  user: UserResponse;
  createdAt: string;
};

export type PostType = {
  id: string;
  userResponse: UserResponse;
  content: string;
  contentPicture?: string;
  isLiked: boolean;
  createdAt: string;
  likesCount: number;
};

export type CreatePostType = {
  content: string;
  contentPicture?: File;
};

export type UserResponse = {
  name: string;
  username: string;
  profilePicture: string;
};

export type NotificationType = {
  id: number;
  message: string;
  isRead: boolean;
};

export type FollowingUser = {
  name: string;
  username: string;
  profilePicture: string;
  hasChat: boolean;
};

export type ChatType = {
  chatId: string;
  user: UserResponse;
  lastMessage: string;
  lastMessageSentAt: string;
};

export type HomeState = {
  posts: {
    posts: PostType[] | null;
    loading: boolean;
    error: any | null;
  };
  chat: {
    chats: ChatType[] | null;
    loading: boolean;
    error: any | null;
  };
  following: {
    followings: FollowingUser[] | null;
    loading: boolean;
    error: any | null;
  };
  notifications: {
    notifications: NotificationType[] | null;
    loading: boolean;
    error: any | null;
  };
  SearchResults: {
    users: SearchUser[] | null;
    loading: boolean;
    error: any | null;
  };
};
