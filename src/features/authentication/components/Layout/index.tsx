import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";
import { Link, useParams } from "react-router-dom";

const index = (props: React.PropsWithChildren) => {
  const { pageName } = useParams();

  return (
    <div className="flex flex-col justify-center md:w-[580px] font-semibol">
      <Card className="bg-gray-800 text-white border-0 font-medium rounded-2xl">
        <CardHeader>
          <CardTitle className="text-center capitalize">{pageName}</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col justify-center ">
          {props.children}
        </CardContent>
        <CardFooter>
          {pageName === "login" && (
            <h3>
              Not a member? <Link to="/auth/signup" className="underline"> Signup </Link>
            </h3>
          )}
          {pageName === "signup" && (
            <h3>
              Already a member? <Link to="/auth/login" className="underline"> Login </Link>
            </h3>
          )}
        </CardFooter>
      </Card>
    </div>
  );
};

export default index;
