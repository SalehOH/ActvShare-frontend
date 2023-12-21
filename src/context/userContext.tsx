import React, { PropsWithChildren, createContext, useState } from "react";

export type ApplicationUser = {
  name?: string;
  username: string;
  profilePicture?: string;
  token: string;
  isLoggedIn: boolean;
};

export const userContext = createContext<{
  user: ApplicationUser | null;
  addUser: (user: ApplicationUser | null) => void;
}>({
  user: null,
  addUser: () => {},
});

const getDataFromLocalStorage = (setUser: Function): void => {
  const user = localStorage.getItem("user");
  if (user) {
    setUser(JSON.parse(user));
  }
};

export const UserProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [user, setUser] = useState<ApplicationUser | null>(null);
  
  React.useEffect(() => {
    getDataFromLocalStorage(setUser);
  }, []);
  
  const addUser = (user: ApplicationUser | null) => {
    localStorage.setItem("user", JSON.stringify(user));
    setUser(user);
  };

  return (
    <userContext.Provider value={{ user, addUser }}>
      {children}
    </userContext.Provider>
  );
};
