import React from "react";
import NotificationCard from "./notificationCard";
import Loading from "./notificationCard/loading";
import { NotificationType } from "@/pages/home/utils/types";
import { FaBell } from "react-icons/fa6";
import axios from "axios";
import useRestrictUser from "../../hooks/useRestrictUser";
import useSetTab from "../../hooks/useSetTab";


const url = import.meta.env.VITE_API_URL + "account/notifications";

const index = () => {
  const token = JSON.parse(localStorage.getItem("user") ?? "{}")["token"];
  useRestrictUser(token);
  useSetTab(3);
  const [loading, setLoading] = React.useState(true);
  const [notifciations, setNotifciations] = React.useState<NotificationType[]>(
    []
  );

  React.useEffect(() => {
    const getNotifciations = async () => {
      try {
        const response = await axios.get(url, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setNotifciations(response.data);
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    };
   if(token) getNotifciations();
  }, []);

  return (
    <div className="bg-gray-800 w-full rounded-xl border-opacity-40 border-gray-700 border p-4">
      <div className="flex flex-col items-center p-3">
        <header className="flex items-center justify-center font-bold md:text-2xl text-white">
          <FaBell />
          <span className="ml-2">Notification</span>
        </header>
        {loading ? (
          <div className="w-full">
            <Loading />
            <Loading />
            <Loading />
          </div>
        ) : (
          notifciations.map((notification) => {
            return (
              <NotificationCard
                key={notification.id}
                notification={notification}
              />
            );
          })
        )}
      </div>
    </div>
  );
};

export default index;
