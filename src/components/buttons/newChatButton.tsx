import { RiChatNewFill } from "react-icons/ri";
import { Button } from "../ui/button";

type Props = {
  onClick?: () => void;
}
const newChatButton = (props: Props) => {
  return (
    <>
      <Button
        className=" bg-gray-900 hover:bg-white hover:text-black text-lg rounded-xl"
        onClick={props.onClick}
        type="button"
      >
        <RiChatNewFill />
      </Button>
    </>
  );
};

export default newChatButton;
