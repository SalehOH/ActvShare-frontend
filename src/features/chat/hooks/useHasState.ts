import { useLayoutEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const useHasState = () => {
  const [chatId, setChatId] = useState<string | undefined>();
  const location = useLocation();
  const navigate = useNavigate();

  useLayoutEffect(() => {
    const id = location.state.chatId;
    if (id) {
      setChatId(id);
    } else {
      navigate("/");
    }
  }, []);
  return chatId;
};

