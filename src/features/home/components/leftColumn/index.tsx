import { FaBell, FaMessage, FaUserGroup } from "react-icons/fa6";
import { HiHome } from "react-icons/hi";
interface reactProps {
  tabSetter: Function;
  currentTab: number;
}


const index = (props: reactProps) => {
  const setTap = props.tabSetter;
  const { currentTab } = props;

  return (
    <>
      <div className="flex flex-col w-full bg-gray-800 h-max rounded-xl border border-gray-700 border-opacity-40">
        <ul className="p-2 text-white font-semibold text-2xl">
          <li
            className={`my-3 p-3 hover:bg-gray-900 rounded-xl  flex items-center ${currentTab === 0 && "bg-gray-900"}`}
            onClick={() => setTap(0)}>
            <HiHome />
            <span className="hidden md:flex ml-2 text-lg">Home</span>
          </li>

          <li
            className={`my-3 p-3 hover:bg-gray-900 rounded-xl flex items-center ${currentTab === 1 && "bg-gray-900"}`}
            onClick={() => setTap(1)}>
            <FaUserGroup />
            <span className="hidden md:flex ml-2 text-lg">Followers</span>
          </li>

          <li
            className={`my-3 p-3 hover:bg-gray-900 rounded-xl flex items-center ${currentTab === 2 && "bg-gray-900"}`}
            onClick={() => setTap(2)}>
            <FaMessage />
            <span className="hidden md:flex ml-2 text-lg">Chat</span>
          </li>

          <li
            className={`my-3 p-3 hover:bg-gray-900 rounded-xl flex items-center ${currentTab === 3 && "bg-gray-900"}`}
            onClick={() => setTap(3)}>
            <FaBell />
            <span className="hidden md:flex ml-2 text-lg">Notifications</span>
          </li>
        </ul>
      </div>
    </>
  );
};

export default index;
