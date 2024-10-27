import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { ChatMessage } from "./ChatMessage";

const LiveChat = () => {
  const [chatMessage, setChatMessage] = useState("");
  const dispatch = useDispatch();

  const chatMessages = useSelector((store) => store.chat?.messages);

  useEffect(() => {
    // Every 1.5s it will call the API
    const intervalHandler = setInterval(() => {
      // API Polling
      dispatch(
        addMessage({
          id: new Date().toISOString(),
          name: `${new Date().toISOString()} +"Anik"`,
          message: "Hello react live chat.",
        }),
      );
    }, 2000);

    // Clear Interval
    return () => clearInterval(intervalHandler);
  }, []);

  return (
    <>
      <div className="flex w-full flex-col">
        {/* Chat messages */}
        <div className="m-3 mb-0 h-[25rem] w-[35%] overflow-y-scroll rounded-xl border border-stone-400 bg-slate-50 px-3 py-1">
          <div className="flex flex-col">
            {chatMessages?.map((chat) => (
              <ChatMessage
                key={chat.id}
                name={chat.name}
                message={chat.message}
              />
            ))}
          </div>
        </div>

        {/* Chat input box */}
        <form
          onSubmit={(e) => {
            e.preventDefault();

            // Chat message add to the store
            if (chatMessage) {
              dispatch(
                addMessage({
                  id: `${new Date().toISOString()}${chatMessage}`,
                  name: `Mr. Anik`,
                  message: chatMessage,
                }),
              );
            }
          }}
          className="mx-3 my-1 w-[35%]"
        >
          <input
            type="text"
            className="mt-0 w-[75%] rounded-lg border-2 border-slate-300 px-2 py-1 focus:outline-none focus:ring-0"
            placeholder="Write here..."
            value={chatMessage}
            onChange={(e) => setChatMessage(e.target.value)}
          />
          <button className="ml-1 rounded-lg bg-sky-400 px-3 py-1 hover:bg-purple-500">
            send
          </button>
        </form>
      </div>
    </>
  );
};

export { LiveChat };
