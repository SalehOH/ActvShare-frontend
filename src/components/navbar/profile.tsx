import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useUserContext } from "@/hooks/useUserContext";
import { Link } from "react-router-dom";

const url = import.meta.env.VITE_IMAGE_URL;

const profile = () => {
  const { user } = useUserContext();

  const handleLogout = () => {
    localStorage.removeItem("user");
    window.location.reload();
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="mr-2">
        <img
          className="h-8 w-8 rounded-full "
          src={
            user != null
              ? `${url}${user?.profilePicture}`
              : "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          }
          alt=""
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {user != null ? (
          <div className="text-black">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onClick={handleLogout}
              className="font-medium cursor-pointer w-full"
            >
              Logout
            </DropdownMenuItem>
          </div>
        ) : (
          <Link to="/auth/login" >
            <DropdownMenuLabel>Login</DropdownMenuLabel>
          </Link>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default profile;
