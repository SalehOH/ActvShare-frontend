import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FaRegHeart, FaRegShareFromSquare } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

const index = () => {
  
  return (
    <Card className="bg-inhatit md:border-gray-800 border-0 pt-3 md:mx-[100px] ">
      <CardHeader className="text-white">
        <CardTitle className="flex items-center justify-start text-sm">
          <Skeleton className="w-10 h-10 rounded-full" />
          <span className="ml-3">
            <Skeleton className="w-[70px] h-7" />
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent className="text-white font-medium mb-2 ml-12">
        <div className="mb-2 opacity-80 text-justify text-sm md:text-lg">
          <Skeleton className="w-[270px] xl:w-[1100px] h-4 mb-2" />
          <Skeleton className="w-[250px] xl:w-[950px] h-4 mb-2" />
          <Skeleton className="w-[270px] xl:w-[1050px] h-4 mb-2" />
          <Skeleton className="w-[230px] xl:w-[900px] h-4 mb-10" />
        </div>
        <Skeleton className="ml-auto mt-2 w-[280px] md:w-full h-[150px] md:h-[500px] rounded-3xl" />
      </CardContent>
      <CardFooter className="mt-1 border-gray-800 border-t border-b-4 shadow-2xl">
        <div className="flex flex-1 justify-between text-white mt-3">
          <div className="flex items-center">
            <Button
              variant="outline"
              size="icon"
              className="bg-inherit border-gray-500 hover:text-red-600 hover:bg-gray-500 hover:scale-150 transition-transform duration-300 ease-in-out"
            >
              <FaRegHeart />
            </Button>
            <span className="ml-3 font-semibold text-lg"><Skeleton className="w-4 h-7" /> </span>
          </div>
          <Button
            variant="outline"
            size="icon"
            className="bg-inherit border-gray-500  hover:text-blue-800 hover:bg-gray-500 hover:scale-150 transition-transform duration-300 ease-in-out"
          >
            <FaRegShareFromSquare />
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default index;
