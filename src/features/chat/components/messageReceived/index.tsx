import { timeFormat } from "@/utils/timeFormat";
import { MessageType } from "../../utils/types";

const index = (props: { message: MessageType }) => {
  const { message } = props;
  const displayTime = timeFormat(message.createdAt);
  return (
    <div className="flex flex-col gap-1 w-fit max-w-[320px] lg:max-w-lg">
      <div className="flex flex-col leading-1.5 p-4 border-blue-200 bg-gray-900 rounded-t-xl rounded-es-xl ">
        <p className="text-sm md:text-xl font-medium text-white break-all">{message.content}</p>
      </div>
      <span className="text-sm font-normal text-gray-500 dark:text-gray-400">{displayTime}</span>
    </div>
  );
};

export default index;
