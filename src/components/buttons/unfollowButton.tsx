import { Button } from "@/components/ui/button";
import { MdPersonRemoveAlt1 } from "react-icons/md";
import { useDispatcher } from "@/hooks/useDispatcher";
import { unfollow } from "@/features/home/store/actions";
import { toggleFollow } from "@/features/home/store";

const unfollowButton = ({ username }: { username: string }) => {
  const dispatch = useDispatcher();
  const handleCLick = (event: React.MouseEvent) => {
    event.stopPropagation();
    dispatch(unfollow(username)).then(() => dispatch(toggleFollow({ username, type: "unfollow" })));
  };
  return (
    <Button
      onClick={handleCLick}
      variant="outline"
      size="icon"
      className="bg-gray-900 border-0 text-md md:text-2xl rounded-xl mr-2">
      <MdPersonRemoveAlt1 />
    </Button>
  );
};

export default unfollowButton;
