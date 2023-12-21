import Reply from "./reply";
import { ReplyType } from "@/pages/home/utils/types";

interface ReplyProps {
  replies: ReplyType[];
}

const index = (props: ReplyProps) => {
  return (
    <>
      <section className="font-medium md:text-lg text-xs text-white md:mx-[100px] bg-gray-900 rounded-2xl border border-gray-900 shadow-2xl pt-3 mb-2 text-justify">
        
          {props.replies.map((reply) => {
            return <Reply key={reply.id} reply={reply} />;
          })}

      </section>
    </>
  );
};

export default index;
