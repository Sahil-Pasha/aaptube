import React from "react";

const chatMessageStyle = {
  display: "flex",
  gap: "10px",
  alignItems: "center",
  marginLeft: "10px",
  marginTop: "10px",
  boxShadow: ".5px .1px 0.50px ",
};

const ChatMessage = ({ name, message }) => {
  return (
    <div style={chatMessageStyle}>
      <img
        width={20}
        height={20}
        src="https://www.freeiconspng.com/thumbs/profile-icon-png/am-a-19-year-old-multimedia-artist-student-from-manila--21.png"
        alt="Profile Icon"
      />
      <span style={{ fontWeight: "bold" }}>{name}</span>
      <span>{message}</span>
    </div>
  );
};

export default ChatMessage;
