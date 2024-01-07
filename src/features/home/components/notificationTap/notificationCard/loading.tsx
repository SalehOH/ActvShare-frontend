import { Skeleton } from "@/components/ui/skeleton";
import { FaBell } from "react-icons/fa6";

const notificationCard = () => {
  return Array.from({ length: 3 }).map((_, i) => {
    return (
      <div key={i} className="w-full mt-4">
        <div className="flex items-center m-2 lg:m-4 md:m-6 text-white p-3 md:p-4 lg:p-5 rounded-3xl bg-gray-900">
          <div className="text-2xl md:text-4xl opacity-90 mr-6">
            <FaBell />
          </div>
          <div className="w-full p-4">
            <div className="flex items-center justify-between">
              <div className="flex flex-col">
                <Skeleton className="w-[140px] md:w-[250px] lg:w-[520px] h-3 md:h-4 lg:h-6 my-1" />
                <Skeleton className="w-[100px] md:w-[120px] lg:w-[420px] h-3 md:h-4 lg:h-6 my-1" />
              </div>
              <Skeleton className="w-4 lg:w-8 h-4 lg:h-8" />
            </div>
          </div>
        </div>
      </div>
    );
  });
};

export default notificationCard;
