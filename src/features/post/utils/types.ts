import { PostType, ReplyType } from "@/features/home/utils/types";

export type PostWithReplies = {
  post: PostType;
  replies: ReplyType[];
};

export type PostSlice = {
  postWithReplies: PostWithReplies | null;
  loading: boolean;
  error: any | null;
};