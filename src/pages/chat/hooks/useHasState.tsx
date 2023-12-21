import { useLayoutEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const useHasState = () => {
  const [id, setId] = useState<string | undefined>();
  const location = useLocation();
  const navigate = useNavigate();

  useLayoutEffect(() => {
    const _id = location.state.chatId as string;
    if (_id) {
      setId(_id);
    } else {
      navigate("/");
    }
  }, []);
  return { id };
};

export default useHasState;
