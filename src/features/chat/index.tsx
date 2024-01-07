import ChatComponent from "./components/chat";
import SideMenu from "./components/chatsList";
import { useMediaQuery } from "react-responsive";

const index = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1024px)",
  });

  return (
    <div className="flex bg-gray">
      {isDesktopOrLaptop && (
        <div className="w-5/12 bg-gray-950 border-r-4 border-gray-700">
          <SideMenu />
        </div>
      )}
      <div className="w-full lg:w-7/12 h-[100svh] md:max-h-screen flex flex-col ml">
        <ChatComponent />
      </div>
    </div>
  );
};

export default index;
