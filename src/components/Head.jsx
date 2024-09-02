import React from "react";
import { Grid } from "@mui/material";
import { withStyles } from "@mui/styles";
import SearchInput from "./SearchInput";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const styles = {
  mainDiv: {
    paddingLeft: "20px",
  },
};
function Head(props) {
  const { classes } = props;

  const dispatch = useDispatch();

  const toggleHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div>
      <Grid
        container
        style={{
          position: "fixed",
          marginTop: "-8px",
          backgroundColor: "white",
        }}
      >
        <Grid item md={2}>
          <div className={classes.mainDiv}>
            <img
              style={{ paddingBottom: "16px", cursor: "pointer" }}
              onClick={() => toggleHandler()}
              width={25}
              height={25}
              src="https://cdn1.iconfinder.com/data/icons/heroicons-solid/20/menu-512.png"
              alt="HamburgerIcon"
            />

            <a href="/">
              <img
                width={150}
                height={60}
                src="https://lh3.googleusercontent.com/3zkP2SYe7yYoKKe47bsNe44yTgb4Ukh__rBbwXwgkjNRe4PykGG409ozBxzxkrubV7zHKjfxq6y9ShogWtMBMPyB3jiNps91LoNH8A=s500"
                alt="YoutubeIcon"
              />
            </a>
          </div>
        </Grid>
        <Grid item md={7}>
          <SearchInput />
        </Grid>
        <Grid item md={3}>
          <ul
            style={{
              display: "flex",
              justifyContent: "space-around",
              listStyleType: "none",
            }}
          >
            <li>
              <img
                width={25}
                height={25}
                src="https://static-00.iconduck.com/assets.00/video-plus-icon-512x358-fpbzlocu.png"
                alt="Create Video Icon"
              />
            </li>
            <li>
              <img
                width={25}
                height={25}
                src="https://w7.pngwing.com/pngs/141/637/png-transparent-computer-icons-notifications-cdr-area-sound-icon-thumbnail.png"
                alt="Notification Icon"
              />
            </li>
            <li>
              <img
                width={25}
                height={25}
                src="https://www.freeiconspng.com/thumbs/profile-icon-png/am-a-19-year-old-multimedia-artist-student-from-manila--21.png"
                alt="Profile Icon"
              />
            </li>
          </ul>
        </Grid>
      </Grid>
    </div>
  );
}

export default withStyles(styles)(Head);
