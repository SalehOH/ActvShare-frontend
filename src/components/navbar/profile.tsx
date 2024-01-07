import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { HiUserCircle } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { useUser } from "@/hooks/useUser";
import { logoutUser } from "@/features/authentication/store/actions";
import { useDispatcher } from "@/hooks/useDispatcher";
import { useState } from "react";

const url = import.meta.env.VITE_IMAGE_URL;

const profile = () => {
  const user = useUser();
  const dispatch = useDispatcher();
  const [open, setOpen] = useState(false);

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  const closeMenu = () => {
    setOpen(false);
  };
  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger className=" rounded-full">
        {user ? (
          <img className="h-8 w-8 rounded-full " src={url + user?.profilePicture} alt="" />
        ) : (
          <div className="text-3xl">
            <HiUserCircle />
          </div>
        )}
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-gray-900 border-0">
        {user != null ? (
          <DropdownMenuItem onClick={handleLogout} className="font-semibold cursor-pointer w-full text-white">
            Logout
          </DropdownMenuItem>
        ) : (
          <Link to="/auth/login" className="font-semibold cursor-pointer w-full text-white" onClick={closeMenu}>
            <DropdownMenuLabel>Login</DropdownMenuLabel>
          </Link>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default profile;
