import React, { useState } from "react";
import { withStyles } from "@mui/styles";
import { useNavigate } from "react-router";
import { API_KEY } from "../utils/constants";
import { searchResults } from "../utils/searchSlice";
import { useDispatch } from "react-redux";

const styles = {
  mainDiv: {
    backgroundColor: "white",
    display: "flex",
    position: "fixed",
    marginTop: "20px",
  },
  buttons: {
    marginLeft: "10px",
    height: "35px",
    border: "none",
    borderRadius: "6px",
    fontWeight: "bold",
    "&:hover": {
      color: "black",
      backgroundColor: "#A6C6C6", // Background color on hover
    },
  },
};

const buttonList = [
  "All",
  "Web Development",
  "CSS",
  "Java",
  "Indian National Cricket Team",
  "Music",
  "News",
  "Live",
  "Politics",
  "Dramedy",
  "Podcasts",
  "Entertainment",
  "Comedy Clubs",
];
const ButtonList = (props) => {
  const { classes } = props;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const fetchVideosOnSearch = async (searchQuery) => {
    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${searchQuery}&type=video&key=${API_KEY}`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      // setSearchVideos(data.items);
      dispatch(
        searchResults({
          ["data"]: data.items,
        })
      );
    } catch (error) {
      console.error("There was a problem with the fetch search Videos:", error);
    }
  };

  const handleButtonClick = (text) => {
    // console.log("Selected text is", text);
    if (text === "All") {
      navigate("/");
    } else {
      fetchVideosOnSearch(text);
      navigate(`/search?search=${text}`);
    }
  };

  return (
    <div style={{}}>
      <div className={classes.mainDiv}>
        {buttonList &&
          buttonList.map((items, index) => (
            <button
              key={items}
              onClick={() => handleButtonClick(items)}
              className={classes.buttons}
            >
              <span>{items}</span>
            </button>
          ))}
        {/* <button className={classes.buttons}>
          <span>Web Development</span>
        </button>
        <button className={classes.buttons}>
          <span>CSS</span>
        </button>
        <button className={classes.buttons}>
          <span>Java</span>
        </button>
        <button className={classes.buttons}>
          <span>Indian National Cricket Team</span>
        </button>
        <button className={classes.buttons}>
          <span>Music</span>
        </button>
        <button className={classes.buttons}>
          <span>News</span>
        </button>
        <button className={classes.buttons}>
          <span>Live</span>
        </button>
        <button className={classes.buttons}>
          <span>Politics</span>
        </button>
        <button className={classes.buttons}>
          <span>Dramedy</span>
        </button>
        <button className={classes.buttons}>
          <span>Podcasts</span>
        </button>
        <button className={classes.buttons}>
          <span>Entertainment</span>
        </button>
        <button className={classes.buttons}>
          <span>Join Comedy Clubs</span>
        </button> */}
        <button className={classes.buttons}>
          <span>
            <img
              width={20}
              height={20}
              src="https://cdn-icons-png.flaticon.com/128/7344/7344971.png"
              alt="Right arrow is loading"
            />
          </span>
        </button>
      </div>
    </div>
  );
};

export default withStyles(styles)(ButtonList);
