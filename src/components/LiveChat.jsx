import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ChatMessage from "./ChatMessage";
import { addMessage } from "../utils/chatSlice";
import {
  generateRandomMessage,
  generateRandomName,
} from "../utils/Assests/helper";

const mainDivStyles = {
  marginTop: "120px",
  border: "1px solid black",
  borderRadius: "10px",
  width: "auto",
  height: "450px",
  overflowY: "scroll",
  display: "flex",
  flexDirection: "column-reverse",
};
const inputDiv = {
  marginTop: "5px",
  marginLeft: "10px",
  height: "30px",
  border: "1px solid black",
  borderRadius: "10px",
};
const inputField = {
  marginLeft: "10px",
  marginTop: "5px",
};
const inputButton = {
  marginLeft: "10px",
  border: "1px solid black",
  borderRadius: "10px",
  backgroundColor: "light-green",
};

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");

  const dispatch = useDispatch();
  const chatMessages = useSelector((state) => state.chat.messages);

  useEffect(() => {
    const interval = setInterval(() => {
      //API call for live chat messages
      // console.log("Ap p0lling");
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: generateRandomMessage(25),
        })
      );
    }, 500);

    return () => clearInterval(interval);
  }, []);

  const handleLiveChat = (e) => {
    e.preventDefault();
    dispatch(
      addMessage({
        name: "Mohd Farhan",
        message: liveMessage,
      })
    );
    setLiveMessage("");
  };

  return (
    <>
      <div style={mainDivStyles}>
        {chatMessages &&
          chatMessages.map((items, index) => (
            <ChatMessage
              key={index}
              name={items.name}
              message={items.message}
            />
          ))}
      </div>
      <form onSubmit={handleLiveChat} style={inputDiv}>
        <input
          style={inputField}
          type="text"
          placeholder="Say something..."
          value={liveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}
        />
        <button type="submit" style={inputButton}>
          Send
        </button>
      </form>
    </>
  );
};

export default LiveChat;
