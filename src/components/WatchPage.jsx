import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import { API_KEY } from "../utils/constants";
import { withStyles } from "@mui/styles";
import { Typography, Button, Grid } from "@mui/material";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";

const styles = {
  iFrameDiv: {
    border: "1px solid black",
    borderRadius: "35px",
    marginTop: "120px",
  },
};
const WatchPage = (props) => {
  const { classes } = props;
  const [searchParam] = useSearchParams();
  const [videoInfo, setVideoInfo] = useState([]);
  // console.log(searchParam.get("v"));
  const videoId = searchParam.get("v");
  // console.log("The video id is", videoId);
  const dispatch = useDispatch();

  const isMenuOpen = useSelector((state) => state.app.isMenuOpen);
  console.log("isMenuOpen", isMenuOpen);

  window.scrollTo(0, 0);

  useEffect(() => {
    dispatch(closeMenu());
    const apiUrl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`;
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setVideoInfo(data.items);
      })
      .catch((error) => {
        console.error("Error fetching video data:", error);
      });
  }, [videoId, API_KEY]);

  return (
    <>
      <Grid container spacing={2}>
        <Grid item md={8} lg={8} xl={8}>
          <iframe
            className={classes.iFrameDiv}
            width={isMenuOpen ? "760" : "800"}
            height="450"
            src={"https://www.youtube.com/embed/" + searchParam.get("v")}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <div>
            {videoInfo &&
              videoInfo.map((values) => (
                <div key={values.snippet.title}>
                  <h3>{values.snippet.title}</h3>
                  <div style={{ display: "flex" }}>
                    <img
                      width={25}
                      height={25}
                      src="https://www.freeiconspng.com/thumbs/profile-icon-png/am-a-19-year-old-multimedia-artist-student-from-manila--21.png"
                      alt="Profile Icon"
                    />
                    <Typography style={{ marginLeft: "20px" }}>
                      {values.snippet.channelTitle}
                    </Typography>
                    <Button
                      className={classes.button}
                      style={{
                        backgroundColor: "black",
                        color: "white",
                        marginLeft: "20px",
                        marginBottom: "20px",
                        border: "1px solid black",
                        borderRadius: "20px",
                        height: "30px",
                        textTransform: "none",
                      }}
                    >
                      Subscribe
                    </Button>
                    <Typography style={{ marginLeft: "20px" }}>
                      {values.statistics.likeCount.toLocaleString()}K Likes
                    </Typography>
                    <Typography style={{ marginLeft: "20px" }}>
                      {values.statistics.viewCount.toLocaleString()}K Views
                    </Typography>
                    <Typography style={{ marginLeft: "20px" }}>
                      {values.statistics.commentCount.toLocaleString()}K
                      Comments
                    </Typography>
                  </div>
                  <div>
                    <Typography>
                      <span style={{ fontWeight: "bold" }}>Published at</span>{" "}
                      {values.snippet.publishedAt}
                    </Typography>
                    <Typography>
                      {values.snippet.description.slice(0, 100)}...
                    </Typography>
                  </div>
                </div>
              ))}
          </div>
        </Grid>
        <Grid item md={4} lg={4} xl={4}>
          <LiveChat />
        </Grid>
      </Grid>
      <Grid container>
        <Grid item>
          <CommentsContainer />
        </Grid>
      </Grid>
    </>
  );
};

export default withStyles(styles)(WatchPage);
