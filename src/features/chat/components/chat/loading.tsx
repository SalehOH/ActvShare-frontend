import { Skeleton } from "@/components/ui/skeleton";
const loading = () => {
  return (
    <div className="w-full md:w-[790px] mx-auto h-full md:h-[83vh] mt-1">
      <div className="bg-gray-800 w-[full] md:rounded-t-3xl min-h-[85.7vh] h-[85.7vh] md:h-full">
        <div className="flex flex-col justify-center items-center">
          <Skeleton className="h-8 md:h-12 w-8 md:w-12 rounded-full border border-gray-700 bg-gray-950" />
          <Skeleton className="text-white font-semibold text-sm" />
          <Skeleton className="text-gray-300 font-semibold text-xs" />
        </div>

        <div className="w-full h-[88%] overflow-y-auto p-1">
          <div className="flex flex-col justify-start font-medium text-white mb-2">
            <div className="flex items-center justify-center rounded-e-full rounded-t-full bg-gray-900 w-fit p-2">
              <Skeleton className="py-2 md:py-4 md:p-2 text-center text-xs md:text-md" />
            </div>
            <Skeleton className="text-gray-400 text-xs my-1" />
          </div>
          <div className=" mr-auto flex flex-col items-end font-medium text-white mb-2">
            <div className="flex items-center justify-center rounded-s-full rounded-t-full bg-blue-900 w-fit p-2">
              <Skeleton className="py-2 md:py-4 md:p-2 text-center text-xs md:text-md" />
            </div>
            <Skeleton className="text-gray-400 text-xs my-1" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default loading;

