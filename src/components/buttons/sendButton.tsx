import { BiSolidSend } from "react-icons/bi";
import { Button } from "../ui/button";

type Props = {
  onClick?: () => void;
  className?: string;
  type?: "submit" | "button";
  disabled?: boolean;
};

const sendButton = (props: Props) => {
  return (
    <Button
      type={props.type}
      onClick={props.onClick}
      variant="outline"
      size="icon"
      className={`inline-flex items-center text-white bg-blue-700 
      rounded-lg focus:ring-4 focus:ring-blue-900 hover:bg-blue-800 border-0 
      ${props.className}
      `}
    >
      <BiSolidSend />
    </Button>
  );
};

export default sendButton;
