import { toast } from "@/components/ui/use-toast";
import { useEffect } from "react";

const usetest = () => {
  useEffect(() => {
    toast({
      title: "Scheduled: Catch up",
      description: "Friday, February 10, 2023 at 5:57 PM",
    });
  }, []);
};

export default usetest;