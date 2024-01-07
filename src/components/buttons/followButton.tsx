import { Button } from "@/components/ui/button";
import { MdPersonAdd } from "react-icons/md";
import { useDispatcher } from "@/hooks/useDispatcher";
import { follow } from "@/features/home/store/actions";
import { toggleFollow } from "@/features/home/store";

const followButton = ({ username }: { username: string }) => {
  const dispatch = useDispatcher();
  return (
    <Button
      onClick={() => dispatch(follow(username)).then(() => dispatch(toggleFollow({ username, type: "follow" })))}
      variant="outline"
      size="icon"
      className="bg-gray-900 border-0 text-md md:text-2xl rounded-xl mr-2">
      <MdPersonAdd />
    </Button>
  );
};

export default followButton;
