import SendButton from "@/components/buttons/sendButton";
import { HubConnection } from "@microsoft/signalr";
import { useRef, useState, FC } from "react";

interface Props {
  connection: HubConnection | null;
}
const index: FC<Props> = ({connection}) => {
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
    <form className="h-auto" onSubmit={(e) => addMessage(e)}>
      <div className="flex w-full bg-gray-700 text-white pb-6 md:pb-2 p-2 border-transparent">
        <input
          ref={inputRef}
          onChange={(e) => setText(e.target.value)}
          className="bg-inherit border w-full rounded-md border-gray-600 p-2 focus:ring-4 focus:ring-blue-600 focus:outline-none font-medium mx-2"
          placeholder="Type a message..."
          type="text"
        />
        <SendButton type="submit" />
      </div>
    </form>
  );
};
export default index;
