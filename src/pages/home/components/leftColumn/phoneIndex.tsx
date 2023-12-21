import { BsThreeDotsVertical } from "react-icons/bs";
import { FaBell, FaMessage, FaUserGroup } from "react-icons/fa6";
import { HiHome } from "react-icons/hi";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const buttonClass = "bg-gray-950 border-0 text-md rounded-full text-white mb-1";
const phoneIndex = ({ tabSetter }: {tabSetter: Function}) => {
  const [showMenu, setShowMenu] = useState(false);
  const [clicked, setClicked] = useState(false);

  const handleClick = (tab: number) => {
    setShowMenu(!showMenu);
    setClicked(!clicked);
    tabSetter(tab);
  }
  return (
    <>
      {showMenu && (
        <div className="flex flex-col">
          <Button
            variant="outline"
            size="icon"
            className={buttonClass}
            onClick={() => handleClick(0)}
          >
            <HiHome />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className={buttonClass}
            onClick={() => handleClick(1)}
          >
            <FaUserGroup />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className={buttonClass}
            onClick={() => handleClick(2)}
          >
            <FaMessage />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className={buttonClass}
            onClick={() => handleClick(3)}
          >
            <FaBell />
          </Button>
        </div>
      )}
      <div>
        <button
          onClick={() => {
            setShowMenu(!showMenu);
            setClicked(!clicked);
          }}
          className={`${
            clicked ? "bg-gray-700" : "bg-gray-950"
          } w-10 h-10 border-0 text-md rounded-full text-white flex justify-center items-center`}
        >
          <BsThreeDotsVertical />
        </button>
      </div>
    </>
  );
};

export default phoneIndex;
