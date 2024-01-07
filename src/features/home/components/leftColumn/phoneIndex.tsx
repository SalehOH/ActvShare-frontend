import { FaBell, FaMessage, FaUserGroup } from "react-icons/fa6";
import { HiHome } from "react-icons/hi";
import { Button } from "@/components/ui/button";
import { FC } from "react";

interface props {
  tabSetter: Function;
  tab: number;
}

const phoneIndex: FC<props> = (props) => {
  const { tabSetter, tab } = props;
  const isActivated = (_tab: number) => "border-0 bg-inherit " + (_tab === tab ? "text-blue-400" : "text-white");

  return (
    <>
      <div className="flex bg-gray-950 p-2 justify-evenly items-center">
        <Button variant="outline" size="icon" className={isActivated(0) + " text-3xl"} onClick={() => tabSetter(0)}>
          <HiHome />
        </Button>
        <Button variant="outline" size="icon" className={isActivated(1) + " text-2xl"} onClick={() => tabSetter(1)}>
          <FaUserGroup />
        </Button>
        <div className="mx-1"></div>
        <Button variant="outline" size="icon" className={isActivated(2) + " text-[22px]"} onClick={() => tabSetter(2)}>
          <FaMessage />
        </Button>
        <Button variant="outline" size="icon" className={isActivated(3) + " text-2xl"} onClick={() => tabSetter(3)}>
          <FaBell />
        </Button>
      </div>
    </>
  );
};

export default phoneIndex;
