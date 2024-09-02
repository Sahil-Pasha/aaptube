import React from "react";

const Comment = ({ data }) => {
  const { name, comment, replies } = data;
  return (
    <div
      style={{
        display: "flex",
        textAlignL: "center",
        alignItems: "center",
        margin: "2px",
        width: "100vh",
        backgroundColor: "ButtonShadow",
        border: "1px solid ButtonShadow",
        borderRadius: "15px",
      }}
    >
      <img
        width={35}
        height={35}
        src="https://www.freeiconspng.com/thumbs/profile-icon-png/am-a-19-year-old-multimedia-artist-student-from-manila--21.png"
        alt="Profile Icon"
      />
      <div>
        <p style={{ margin: "6px", fontWeight: "bold" }}>{name}</p>
        <p style={{ margin: "6px" }}>{comment}</p>
      </div>
    </div>
  );
};

export default Comment;
