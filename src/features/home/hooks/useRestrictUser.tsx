import { ApplicationUser } from "@/utils/types";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const useRestrictUser = (
  token?: string | undefined,
  user?: ApplicationUser | null
) => {
  const navigate = useNavigate();
  useEffect(() => {
    {
      token || user || navigate("/auth/login");
    }
  }, []);
};

export default useRestrictUser;
