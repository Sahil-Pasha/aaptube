import { Grid } from "@mui/material";
import React from "react";
import Card from "@mui/material/Card";
import { Typography } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import { withStyles } from "@mui/styles";
import { Link } from "react-router-dom";

const styles = {
  mainDiv: {
    marginTop: "120px",
    margin: "30px",
  },
  card: {
    border: "1px solid white",
    borderRadius: "40px",
  },
};

const VideoCard = (props) => {
  const { classes } = props;
  const data = props.info;

  function formatDateString(isoString) {
    const date = new Date(isoString);

    const dateOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };

    const formattedDate = date.toLocaleDateString("en-US", dateOptions);

    let hours = date.getUTCHours();
    const minutes = date.getUTCMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12;

    const formattedTime = `${hours}:${minutes
      .toString()
      .padStart(2, "0")} ${ampm}`;

    return `${formattedDate} ${formattedTime}`;
  }

  return (
    <div className={classes.mainDiv}>
      <Grid container spacing={2}>
        {data &&
          data.length > 0 &&
          data.map((item) => (
            <Grid item md={4} key={item.id}>
              <Link to={"/watch?v=" + item.id}>
                <Card
                  sx={{
                    border: "1px solid green",
                    borderRadius: 4,
                  }}
                >
                  <CardMedia
                    component="img"
                    height="194"
                    image={item.snippet.thumbnails.medium.url}
                    alt="Youtube Card"
                  />
                </Card>
              </Link>
              <div style={{ display: "flex" }}>
                <img
                  style={{ paddingTop: "10px" }}
                  width={25}
                  height={25}
                  src="https://www.freeiconspng.com/thumbs/profile-icon-png/am-a-19-year-old-multimedia-artist-student-from-manila--21.png"
                  alt="Channel Name Icon"
                />
                <Typography
                  style={{
                    marginTop: "revert",
                    paddingLeft: "10px",
                    fontWeight: "bold",
                  }}
                >
                  {item.snippet.title}
                </Typography>
              </div>
              <Typography
                style={{
                  // marginTop: "revert",
                  paddingLeft: "34px",
                  fontWeight: "400",
                }}
              >
                {item.snippet.channelTitle}
              </Typography>
              <Typography style={{ paddingLeft: "34px" }}>
                {item.statistics.viewCount} Views
              </Typography>
              <Typography style={{ paddingLeft: "34px" }}>
                {formatDateString(item.snippet.publishedAt)}
              </Typography>
            </Grid>
          ))}
      </Grid>
    </div>
  );
};

export default withStyles(styles)(VideoCard);
