import SendButton from "@/components/buttons/sendButton";
import { useRef, useState } from "react";

const index = ({ connection }: any) => {
  const [text, setText] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const addMessage = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      connection?.invoke("SendMessage", text);
      setText("");
      inputRef.current && (inputRef.current.value = "");
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <form className="h-full" onSubmit={(e) => addMessage(e)}>
      <div className="flex w-full bg-gray-700 text-white md:rounded-b-2xl p-2">
        <input
          ref={inputRef}
          onChange={(e) => setText(e.target.value)}
          className="bg-inherit border w-full rounded-md border-gray-600 p-2 focus:ring-4 focus:ring-gray-950 focus:outline-none font-medium mx-2"
          type="text"
        />
        <SendButton type="submit" />
      </div>
    </form>
  );
};

export default index;
