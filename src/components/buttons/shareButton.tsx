import { FaRegShareFromSquare } from "react-icons/fa6";
import { Button } from "../ui/button";

const likeButton = () => {
  return (
    <Button
      variant="outline"
      size="icon"
      className="bg-inherit border-gray-500  hover:text-blue-800 hover:bg-gray-500 hover:scale-150 transition-transform duration-300 ease-in-out"
    >
      <FaRegShareFromSquare />
    </Button>
  );
}

export default likeButton