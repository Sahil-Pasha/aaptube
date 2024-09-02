import React from "react";
import CircularProgress from "@mui/material/CircularProgress";

const loaderStyles = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  //   height: "10vh", // Adjust the height as needed
};

const Loader = () => {
  return (
    <div style={loaderStyles}>
      <CircularProgress disableShrink />
    </div>
  );
};
export default Loader;
