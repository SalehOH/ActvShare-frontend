import { Skeleton } from "@/components/ui/skeleton";

const index = () => {
  return (
    <div className="flex flex-col w-full bg-gray-950 rounded-3xl p-4 text-gray-200 my-3">
      <div className="flex">
        <Skeleton className="w-12 h-12 rounded-full" />
        <div className="flex flex-col font-semibold text-base">
          <Skeleton className=" ml-5 w-[60px] md:w-[170px] h-5 rounded-xl mb-1" />
          <Skeleton className=" ml-5 w-[30px] md:w-[100px] h-4 rounded-xl" />
        </div>
      </div>
      <div className="ml-[48px] mt-3">
        <Skeleton className=" ml-5 w-[120px] md:w-[670px] h-4 rounded-xl my-1" />
     
      </div>
      <span className="ml-auto p-2">
        <Skeleton className="w-12 h-7 rounded-xl" />
      </span>
    </div>
  );
};

export default index;
