import { useSelector } from "react-redux";
import { getUser } from "@/features/authentication/store/selectors";

export const useUser = () => useSelector(getUser);
