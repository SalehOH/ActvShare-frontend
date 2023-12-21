import moment from "moment";
import { MessageType } from "../../utils/types";

const index = (props: { message: MessageType }) => {
  const { message } = props;
  return (
    <div className=" mr-auto flex flex-col items-end font-medium text-white mb-2">
      <div className="flex items-center justify-center rounded-s-full rounded-t-full bg-blue-900 w-fit p-2">
        <p className="py-2 md:py-4 md:p-2 text-center text-xs md:text-md">{message.text}</p>
      </div>
      <span className="text-gray-400 text-xs my-1">
        {moment(message.createdAt, "YYYY-MM-DD HH:mm:ss").fromNow()}
      </span>
    </div>
  );
};

export default index;
