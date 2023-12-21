/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_URL: string;
  readonly VITE_IMAGE_URL: string;
  readonly VITE_BASE_URL: string;
  readonly VITE_API_URL: string;
  readonly VITE_IMAGE_URL: string;
  readonly VITE_LOGIN_URL: string;
  readonly VITE_LOGOUT_URL: string;
  readonly VITE_REGISTER_URL;
  
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
