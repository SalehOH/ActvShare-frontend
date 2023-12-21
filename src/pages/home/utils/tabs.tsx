import PostTab from "../components/postTab";
import NotificationTap from "../components/notificationTap";
import FollowersTap from "../components/followersTap";
import ChatTap from "../components/chatTap";

export const tabs = [
  {
    name: "Home",
    component: <PostTab />,
  },
  {
    name: "Followers",
    component: <FollowersTap />,
  },
  {
    name: "Chat",
    component: <ChatTap />,
  },
  {
    name: "Notification",
    component: <NotificationTap />,
  },
];
