import { Skeleton } from "@/components/ui/skeleton";

const index = () => {
  return Array.from({ length: 3 }).map((_, i) => {
    return (
      <div key={i} className="flex items-center p-7 mx-7 font-bold text-2xl bg-gray-900 rounded-3xl my-4">
        <Skeleton className="rounded-full w-7 lg:w-12 h-7 lg:h-12" />
        <div className="flex flex-col">
          <Skeleton className="ml-5 w-[140px] lg:w-[220px] h-3 lg:h-7 my-1 rounded-xl" />
          <Skeleton className="ml-5 w-[110px] lg:w-[170px] h-2 lg:h-7 my-1 rounded-xl" />
        </div>
      </div>
    );
  });
};

export default index;
