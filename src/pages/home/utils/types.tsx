export type ReplyType = {
  id: number;
  username: string;
  name?: string;
  userProfilePic: string;
  content: string;
  likes: number;
  createdAt: Date;
};

export type PostType = {
  id: number;
  username: string;
  name?: string;
  userProfilePic?: string;
  content: string;
  imagePath: string;
  createdAt: string;
  replies? : ReplyType[];
  likes: number;
};

export type NotificationType = {
  id: number;
  message: string;
  isRead: boolean;
};

export type FollowingUser = {
  id: number;
  followedUserUsername: string;
  followedUserName?: string;
  followedUserProfilePic: string;
  hasChat?: boolean;
};
