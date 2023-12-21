import { Skeleton } from "@/components/ui/skeleton";
import { FaBell } from "react-icons/fa6";

const notificationCard = () => {
  return (
    <>
      <div className="w-full mt-4">
        <div className="flex items-center m-2 md:m-6 text-white p-3 md:p-5 rounded-3xl bg-gray-900">
          <div className="text-2xl md:text-4xl opacity-90 mr-6">
            <FaBell />
          </div>
          <div className="w-full p-4">
            <div className="flex items-center justify-between">
              <div className="flex flex-col">
                <Skeleton className="w-[140px] md:w-[520px] h-3 md:h-6 my-1" />
                <Skeleton className="w-[100px] md:w-[420px] h-3 md:h-6 my-1" />
              </div>
              <Skeleton className="w-4  md:w-8 h-4 md:h-8" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default notificationCard;
