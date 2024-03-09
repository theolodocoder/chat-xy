import { Socket } from "socket.io-client";
import ChatBar from "./ChatBar";
import ChatBody from "./ChatBody";
import ChatFooter from "./ChatFooter";
import { useEffect, useState } from "react";

export interface MessageItem {
  text: string;
  name: string;
  id: string;
  socketID: string;
}
export default function Chat({ socket }: { socket: Socket }) {
  const [messages, setMessages] = useState<MessageItem[]>([]);

  useEffect(() => {
    socket.on("messageResponse", (data) => setMessages([...messages, data]));
  }, [socket, messages]);

  return (
    <div className="chat">
      <ChatBar />
      <div className="chat__main">
        <ChatBody messages={messages} />
        <ChatFooter socket={socket} />
      </div>
    </div>
  );
}
