import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "../ui/button";
import { FaRegHeart, FaRegShareFromSquare } from "react-icons/fa6";



const loading = () => {
  return (
    <Card className=" bg-gray-800 border-gray-800 mb-3 border-b-0 rounded-2xl">
      <CardHeader className="text-white">
        <CardTitle className="flex items-center justify-start">
          <Skeleton className="w-10 h-10 rounded-full" />
          <span className="ml-3">
            <Skeleton className="w-[80px] h-5" />
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent className="text-white font-medium mb-2 ml-[50px] cursor-pointer">
        <Skeleton className="w-[270px] xl:w-[500px] h-4 mb-2" />
        <Skeleton className="w-[250px] xl:w-[470px] h-4 mb-2" />
        <Skeleton className="w-[270px] xl:w-[500px] h-4 mb-2" />
        <Skeleton className="w-[230px] xl:w-[450px] h-4 mb-10" />

        <Skeleton className="ml-auto mt-2 w-[280px] md:w-[400px] h-[150px] md:h-[250px] rounded-3xl" />
      </CardContent>
      <CardFooter className="bg-gray-700 rounded-b-2xl border-b border-gray-800">
        <div className="flex flex-1 justify-between text-white mt-3">
          <div className="flex items-center">
            <Button
              variant="outline"
              disabled
              size="icon"
              className="bg-inherit border-gray-500 hover:text-red-600 hover:bg-gray-500 hover:scale-150 transition-transform duration-300 ease-in-out"
            >
              <FaRegHeart />
            </Button>
            <span className="ml-3 font-semibold text-lg">
              <Skeleton className="w-4 h-7" />{" "}
            </span>
          </div>
          <Button
            variant="outline"
            disabled
            size="icon"
            className="bg-inherit border-gray-500  hover:text-blue-800 hover:bg-gray-500 hover:scale-150 transition-transform duration-300 ease-in-out"
          >
            <FaRegShareFromSquare />
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}

export default loading