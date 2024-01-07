import React from "react";
import { useLocation } from "react-router-dom";
import Photo from "@/assets/ActvShare.png";
import Profile from "./profile";
import Search from "./search";
import { Link, Outlet } from "react-router-dom";

const index = () => {
  const location = useLocation();
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Check if the URL is in the chat
  const isChatUrl = location.pathname.includes("/chat");

  if (isChatUrl) return <Outlet />;
  return (
    <div className="w-full">
      <div className="flex justify-center">
        <nav className="w-full p-4 flex bg-gray-800 border-b-[0.1px] border-gray-900 text-white rounded-b-lg">
          {windowWidth < 768 && (
            <div className="flex items-center">
              {/*<SideMenu />*/}
              <span className="mr-[3px]"></span>
              <Search windowWidth={windowWidth} />
            </div>
          )}
          <div className={`flex items-center ${windowWidth < 768 && "flex-grow"} `}>
            <Link className="mx-auto" to="/">
              <img src={Photo} alt="Image" className="h-14 w-14 md:mx-0" />
            </Link>
          </div>
          <div className="hidden md:flex flex-grow justify-center items-center mx-auto">
            <Search windowWidth={windowWidth} />
          </div>
          <div className="flex items-center justify-end mr-auto md:mr-5">
            <Profile />
          </div>
        </nav>
      </div>
      <Outlet />
    </div>
  );
};

export default index;
