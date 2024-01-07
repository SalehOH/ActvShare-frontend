import { NotificationType } from "@/features/home/utils/types";
import axios from "axios";
import { FaBell, FaRegBell } from "react-icons/fa6";

const url = import.meta.env.VITE_API_URL + "account/notifications/";

const notificationCard = (props: { notification: NotificationType }) => {
  const notification = props.notification;
  const handleClick = async () => {
    if (notification.isRead) return;
    try {
      await axios.put(
        url + notification.id,
        {},
        {
          headers: {
            Authorization: `Bearer ${
              JSON.parse(localStorage.getItem("user") ?? "{}")["token"]
            }`,
          },
        }
      );
      notification.isRead = true;
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="w-full cursor-pointer mt-4">
        <div
          onMouseOver={handleClick}
          className={`flex items-center md:m-6 text-white p-5 rounded-3xl hover:bg-gray-700 mb-1 ${
            notification.isRead ? "bg-gray-700" : "bg-gray-900"
          }`}
        >
          <div className="text-2xl md:text-4xl opacity-90 mr-5 ">
            {notification.isRead ? <FaRegBell /> : <FaBell />}
          </div>
          <div className="md:p-4">
            <div className="flex items-center mr-5">
              <h1 className="font-medium md:font-semibold text-xs">
                {notification.message}
              </h1>
              {/*<span className="ml-auto">{notifciation.time}</span>*/}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default notificationCard;
