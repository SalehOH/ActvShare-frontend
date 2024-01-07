import { MouseEventHandler, FC } from "react";
import { Button } from "../ui/button";
import { FaImage } from "react-icons/fa6";

interface Props {
  onClick?: MouseEventHandler;
  className?: string;
}
const imageButton: FC<Props> = ({ onClick, className }) => {
  return (
    <>
      <Button
        onClick={onClick}
        type="button"
        variant="outline"
        size="icon"
        className={
          className
            ? className
            : `mr-2 inline-flex justify-center items-center p-2 rounded cursor-pointer text-gray-400 hover:text-white hover:bg-gray-600 bg-inherit border-0`
        }>
        <FaImage />
        <span className="sr-only">Upload image</span>
      </Button>
    </>
  );
};

export default imageButton;
