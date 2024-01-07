import { useEffect, useState } from "react";
import { ApplicationUser } from "@/utils/types";
import {
  HubConnection,
  HubConnectionBuilder,
  LogLevel,
} from "@microsoft/signalr";
import { toast } from "@/components/ui/use-toast";

const url = import.meta.env.VITE_BASE_URL;

const useNotfiy = (user: ApplicationUser | null) => {
  const [connection, setConnection] = useState<HubConnection | null>(null);

  useEffect(() => {
    const coonect = async () => {
      try {
        const newConnection = new HubConnectionBuilder()
          .withUrl(`${url}hubs/notification`, {
            accessTokenFactory: () => `${user?.token}`,
          })
          .configureLogging(LogLevel.Information)
          .build();
        await newConnection.start();
        setConnection(newConnection);
      } catch (e) {
        console.log(e);
      }
    };
    if (user) coonect();
  }, [user]);

  useEffect(() => {
    connection?.on("ReceiveNotification", (notification: string) => {
      console.log(notification);
      toast({
        title: notification,
      });
    });
  }, [connection]);
};

export default useNotfiy;
