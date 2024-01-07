import { RiChatNewFill } from "react-icons/ri";
import { Button } from "../ui/button";
import { useDispatcher } from "@/hooks/useDispatcher";
import { createChat, fetchChats } from "@/features/home/store/actions";

const newChatButton = ({ username }: { username: string }) => {
  const dispatch = useDispatcher();

  return (
    <>
      <Button
        className=" bg-gray-900 md:hover:bg-white md:hover:text-black text-md md:text-lg rounded-xl border-0"
        variant="outline"
        onClick={() => dispatch(createChat(username)).then(() => dispatch(fetchChats()))}
        size="icon"
        type="button">
        <RiChatNewFill />
      </Button>
    </>
  );
};

export default newChatButton;
