import {Skeleton} from "@/components/ui/skeleton";

const index = () => {
  return (
    <div className="flex items-center p-7 mx-7 font-bold text-2xl bg-gray-900 rounded-3xl my-4">
      <Skeleton className="rounded-full w-12 h-12" />
      <div className="flex flex-col">
        <Skeleton className="ml-5 w-[220px] h-7 my-1 rounded-xl" />
        <Skeleton className="ml-5 w-[170px] h-7 my-1 rounded-xl" />
      </div>
    </div>
  );
};

export default index;
