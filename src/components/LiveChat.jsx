import React, { useEffect } from "react";
import ChatsMessage from "./ChatsMessage";
import { useDispatch, useSelector } from "react-redux";
import { setMessage } from "../Store/chatSlice";
import { generateRandomMessage, generateRandomName } from "../Store/Helper";

const LiveChat = () => {
  const message = useSelector((store) => store.chat.message);
  const dispatch = useDispatch();
  useEffect(() => {
    const timer = setInterval(() => {
      dispatch(
        setMessage({
          name: generateRandomName(),
          message: generateRandomMessage(16),
        })
      );
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <div className="px-4 py-1">
      <div>
        {message.map((item, idx) => {
          return <ChatsMessage key={idx} item={item} />;
        })}
      </div>
    </div>
  );
};

export default LiveChat;
