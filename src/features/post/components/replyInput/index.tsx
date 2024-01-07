import TextareaAutosize from "react-textarea-autosize";
import { useState } from "react";
import { useDispatcher } from "@/hooks/useDispatcher";
import { addReply } from "../../store/actions";
import { useSelector } from "react-redux";
import { selectPost } from "../../store/selectors";

const replyInput = () => {
  const [message, setMessage] = useState("");
  const dispatch = useDispatcher();
  const { postWithReplies } = useSelector(selectPost);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(addReply({ postId: postWithReplies?.post.id!, content: message }));
    setMessage("");
  };
  return (
    <form className="fixed bottom-0 left-0 w-full md:px-[100px]" onSubmit={handleSubmit}>
      <label htmlFor="chat" className="sr-only">
        Your message
      </label>
      <div className="flex items-center px-1 py-2 md:rounded-t-lg bg-gray-700 w-full">
        <TextareaAutosize
          className="block focus:outline transition-all ease-in-out duration-300 md:text-xl mx-1 md:mx-10 p-2.5 w-full text-sm rounded-lg border bg-gray-800 border-gray-600 placeholder-gray-400 text-white no-scrollbar resize-none"
          maxRows={3}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          type="submit"
          className="inline-flex justify-center p-2 rounded-full cursor-pointer text-blue-500 hover:bg-gray-600 mr-4">
          <svg
            className="w-5 h-5 rotate-90 rtl:-rotate-90"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 18 20">
            <path d="m17.914 18.594-8-18a1 1 0 0 0-1.828 0l-8 18a1 1 0 0 0 1.157 1.376L8 18.281V9a1 1 0 0 1 2 0v9.281l6.758 1.689a1 1 0 0 0 1.156-1.376Z" />
          </svg>
          <span className="sr-only">Send message</span>
        </button>
      </div>
    </form>
  );
};
export default replyInput;
