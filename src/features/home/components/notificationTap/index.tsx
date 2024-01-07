import React from "react";
import NotificationCard from "./notificationCard";
import Loading from "./notificationCard/loading";
import useSetTab from "../../hooks/useSetTab";

import { FaBell } from "react-icons/fa6";
import { selectNotifications } from "../../store/selectors";
import { useSelector } from "react-redux";
import { useDispatcher } from "@/hooks/useDispatcher";
import { fetchNotifications } from "../../store/actions";

const index = () => {
  const { notifications, loading } = useSelector(selectNotifications);
  const dispatch = useDispatcher();

  useSetTab(3);

  React.useEffect(() => {
    dispatch(fetchNotifications());
  }, []);

  let content;
  if (loading) {
    content = <Loading />;
  } else if (notifications?.length === 0 || !notifications) {
    content = <div className="text-center text-muted text-white font-semibold mt-5">You Don't have any notification</div>;
  } else {
    content = (
      <div id="notifications">
        {notifications?.map((notification) => {
          return <NotificationCard key={notification.id} notification={notification} />;
        })}
      </div>
    );
  }
  return (
    <div className="bg-gray-800 w-full rounded-xl border-opacity-40 border-gray-700 border p-4">
      <div className="flex flex-col items-center p-3">
        <header className="flex items-center justify-center font-bold md:text-2xl text-white">
          <FaBell />
          <span className="ml-2">Notification</span>
        </header>
        {content}
      </div>
    </div>
  );
};

export default index;
