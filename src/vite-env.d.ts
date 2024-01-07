/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_IMAGE_URL: string;
  readonly VITE_BASE_URL: string;

  readonly VITE_LOGIN_URL: string;
  readonly VITE_REGISTER_URL: string;
  readonly VITE_REFRESH_URL: string;

  readonly VITE_USER_URL: string;
  readonly VITE_FOLLOW_URL: string;
  readonly VITE_UNFOLLOW_URL: string;
  readonly VITE_FOLLOWINGS_URL: string;
  readonly VITE_NOTIFICATIONS_URL: string;

  readonly VITE_POST_URL: string;
  readonly VITE_POST_LIKE_URL: string;
  readonly VITE_POST_REPLY_URL: string;

  readonly VITE_CHAT_URL: string;
  readonly VITE_CHATHUB_URL: string;

  readonly VITE_SEARCH_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
