import { Skeleton } from "@/components/ui/skeleton";

const loading = () => {
  const loadingPlaceholder = Array.from({ length: 10 }, (_, i) => i);

  return (
    <>
      {loadingPlaceholder.map((_, index) => (
        <div key={index} className="flex w-full p-8 hover:bg-gray-900 mb-6">
          <Skeleton className="w-20 h-20 rounded-full" />
          <div className="ml-3">
            <div className="flex flex-col">
              <Skeleton className="w-40 h-2" />
              <Skeleton className="w-24 h-2 mt-2" />
            </div>
            <div className="mt-3">
              <Skeleton className="w-80 h-4" />
            </div>
          </div>
          <Skeleton className="flex justify-between mt-3 ml-auto h-2 w-9" />
        </div>
      ))}
    </>
  );
};

export default loading;
