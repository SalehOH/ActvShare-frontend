import { MessageType } from "../../utils/types";
import moment from "moment";

const index = (props: { message: MessageType }) => {
  const { message } = props;
  return (
    <div className="flex flex-col justify-start font-medium text-white mb-2">
      <div className="flex items-center justify-center rounded-e-full rounded-t-full bg-gray-900 w-fit p-2">
        <p className="py-2 md:py-4 md:p-2 text-center text-xs md:text-md">{message.text}</p>
      </div>
      <span className="text-gray-400 text-xs my-1">
        {moment(message.createdAt, "YYYY-MM-DD HH:mm:ss").fromNow()}
      </span>
    </div>
  );
};

export default index;
