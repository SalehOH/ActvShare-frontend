import LeftColumn from "./components/leftColumn";
import PhoneLefColumn from "./components/leftColumn/phoneIndex";
//import useNotfiy from "./hooks/useNotfiy";
import { tabs } from "./utils/tabs";
import { Toaster } from "@/components/ui/toaster";
import { useState } from "react";
//import { useUser } from "@/hooks/useUser";

function index() {
  const tab = sessionStorage.getItem("tab");
  const [showTab, setShowTab] = useState(tab ? parseInt(tab) : 0);
  //const user = useUser();

  //useNotfiy(user);
  return (
    <>
      <Toaster />
      <div className="flex md:m-14 justify-center md:justify-normal">
        <div className="hidden lg:flex lg:w-1/4 p-3">
          <LeftColumn tabSetter={setShowTab} currentTab={showTab} />
        </div>
        <div className="lg:w-3/4 lg:p-3 w-full p-3 lg:mr-[90px] mb-10 lg:mb-10">{tabs[showTab].component}</div>
        <div className="fixed lg:hidden w-full bottom-0 left-0">
          <PhoneLefColumn tabSetter={setShowTab} tab={showTab} />
        </div>
      </div>
    </>
  );
}

export default index;
