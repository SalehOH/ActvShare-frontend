import Reply from "./reply";
import { ReplyType } from "@/features/home/utils/types";

interface ReplyProps {
  replies: ReplyType[];
}

const index = (props: ReplyProps) => {
  return (
    <>
      <section className="font-medium md:text-lg text-xs text-white md:mx-[100px] bg-gray-900 pt-3 mb-10 text-justify">
        {props.replies.map((reply) => {
          return <Reply key={reply.id} reply={reply} />;
        })}
      </section>
    </>
  );
};

export default index;
