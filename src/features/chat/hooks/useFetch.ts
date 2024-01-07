import { useNavigate } from "react-router-dom";

export const useStrict = () => {
  const navigate = useNavigate();
  return () => {
    navigate("/login");
  };
};
