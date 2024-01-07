import { Navigate } from "react-router-dom";
import { useUser } from "@/hooks/useUser";
import { ReactElement, FC } from "react";

interface ProtectedRouteProps {
  element: ReactElement; // You expect a React element to render
}

export const ProtectedRoute: FC<ProtectedRouteProps> = ({ element }) => {
  const user = useUser();
  return user ? element : <Navigate to="/auth/login" replace />;
};

export default ProtectedRoute;
