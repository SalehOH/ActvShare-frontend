import { useUserContext } from "@/hooks/useUserContext";
import LeftColumn from "./components/leftColumn";
import PhoneLefColumn from "./components/leftColumn/phoneIndex";
import useNotfiy from "./hooks/useNotfiy";
import { tabs } from "./utils/tabs";
import { Toaster } from "@/components/ui/toaster";
import React from "react";

function index() {
  const tab = sessionStorage.getItem("tab");
  const [showTab, setShowTab] = React.useState(tab ? parseInt(tab) : 0);
  const {user} = useUserContext();
  useNotfiy(user);
  return (
    <>
      <Toaster />
      <div className="flex md:m-14 justify-center md:justify-normal">
        <div className="hidden md:flex md:w-1/4 p-3">
          <LeftColumn tabSetter={setShowTab} currentTab={showTab} />
        </div>
        <div className="md:w-3/4 md:p-3 w-full p-3 md:mr-[90px]">
          {tabs[showTab].component}
        </div>
        <div className="fixed md:hidden bottom-0 left-0 m-4">
          <PhoneLefColumn tabSetter={setShowTab} />
        </div>
      </div>
    </>
  );
}

export default index;
