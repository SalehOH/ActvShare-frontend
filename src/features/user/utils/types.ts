import { UserResponse } from "@/features/home/utils/types";

export type UserSlice = {
  user: UserResponse | null;
  posts: PostType[] | null;
  loading: boolean;
  error: any | null ;
};

type PostType = {
  id: string;
  content: string;
  contentPicture: string | null;
  isLiked: boolean;
  likesCount: number;
  createdAt: string;
};

export type UserPostsResponse = {
  user: UserResponse;
  posts: PostType[];
};
