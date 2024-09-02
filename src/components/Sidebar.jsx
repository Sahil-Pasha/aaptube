import React from "react";
import { withStyles } from "@mui/styles";
import { Button, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import store from "../utils/store";

const styles = {
  buttons: {
    paddingLeft: "16px",
  },
  buttonText: {
    textTransform: "none",
    paddingLeft: "30px",
    marginTop: "10px",
    fontSize: "15px",
    color: "black",
  },
};
const Sidebar = (props) => {
  const { classes } = props;

  const hamburger = useSelector((store) => store.app.isMenuOpen);
  // console.log("The hamburger change is", hamburger);

  return (
    <div
      style={{
        position: "fixed",
        top: "10px",
        left: "0px",
        bottom: "0px",
        width: "200px",
        marginTop: "40px",
      }}
    >
      {hamburger ? (
        <div>
          <Button href="/" className={classes.buttons}>
            <img
              style={{ paddingLeft: "8px" }}
              width={35}
              height={35}
              src="https://static.thenounproject.com/png/3574480-200.png"
              alt="icon is loading"
            />
            <Typography
              className={classes.buttonText}
              style={{ paddingLeft: "22px" }}
            >
              Home
            </Typography>
          </Button>
          <Button href="/shorts" className={classes.buttons}>
            <img
              style={{ paddingLeft: "14px" }}
              width={20}
              height={20}
              src="https://www.iconpacks.net/icons/5/free-icon-youtube-shorts-logo-15253.png"
              alt="icon is loading"
            />
            <Typography className={classes.buttonText}>Shorts</Typography>
          </Button>
          <Button href="/subscriptions" className={classes.buttons}>
            <img
              style={{ paddingLeft: "14px" }}
              width={20}
              height={20}
              src="https://cdn.icon-icons.com/icons2/3237/PNG/512/menu_youtube_social_media_subs_subscription_icon_197393.png"
              alt="icon is loading"
            />
            <Typography className={classes.buttonText}>
              Subscriptions
            </Typography>
          </Button>
          <hr style={{ width: "200px" }} />
          <Button href="/library" className={classes.buttons}>
            <img
              style={{ paddingLeft: "14px" }}
              width={20}
              height={20}
              src="https://static-00.iconduck.com/assets.00/video-library-icon-512x512-99oc4vo3.png"
              alt="icon is loading"
            />
            <Typography className={classes.buttonText}>Library</Typography>
          </Button>
          <Button href="/history" className={classes.buttons}>
            <img
              style={{ paddingLeft: "14px" }}
              width={20}
              height={20}
              src="https://w7.pngwing.com/pngs/988/206/png-transparent-computer-icons-history-icon-design-time-angle-text-logo-thumbnail.png"
              alt="icon is loading"
            />
            <Typography className={classes.buttonText}>History</Typography>
          </Button>
          <Button href="/your-videos" className={classes.buttons}>
            <img
              style={{ paddingLeft: "14px" }}
              width={20}
              height={20}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9Cv3kluzzwRdkTKs6dfGx5pakHA2Y020qGg&usqp=CAU"
              alt="icon is loading"
            />
            <Typography className={classes.buttonText}>Your Videos</Typography>
          </Button>
          <Button href="/watch-later" className={classes.buttons}>
            <img
              style={{ paddingLeft: "14px" }}
              width={20}
              height={20}
              src="https://cdn.iconscout.com/icon/free/png-256/free-watch-later-1781603-1513853.png?f=webp"
              alt="icon is loading"
            />
            <Typography className={classes.buttonText}>Watch later</Typography>
          </Button>
          <Button href="/your-clips" className={classes.buttons}>
            <img
              style={{ paddingLeft: "14px" }}
              width={20}
              height={20}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXgkq3i6r_YnGcucPHH2j9jd5nhht7o852_Q&usqp=CAU"
              alt="icon is loading"
            />
            <Typography className={classes.buttonText}>Your Clips</Typography>
          </Button>
          <Button href="/" className={classes.buttons}>
            <img
              style={{ paddingLeft: "14px" }}
              width={20}
              height={20}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuotBK7yGsjZCOKSPVyP726VZgv1aTZznNaH7GgU6lGVNouR8BcynhmfMM9280uDGib0Q&usqp=CAU"
              alt="icon is loading"
            />
            <Typography className={classes.buttonText}>Show More</Typography>
          </Button>
          <hr style={{ width: "200px" }} />
          <Typography
            style={{ fontWeight: "bold", paddingLeft: "20px" }}
            className={classes.buttonText}
          >
            Subscriptions
          </Typography>
          <Button href="/" style={{ paddingLeft: "20px" }}>
            <img
              width={25}
              height={25}
              src="https://www.freeiconspng.com/thumbs/profile-icon-png/am-a-19-year-old-multimedia-artist-student-from-manila--21.png"
              alt="Profile Icon"
            />
            <Typography
              style={{ paddingLeft: "15px" }}
              className={classes.buttonText}
            >
              Code With Harry
            </Typography>
          </Button>
          <Button href="/" style={{ paddingLeft: "20px" }}>
            <img
              width={25}
              height={25}
              src="https://www.freeiconspng.com/thumbs/profile-icon-png/am-a-19-year-old-multimedia-artist-student-from-manila--21.png"
              alt="Profile Icon"
            />
            <Typography
              style={{ paddingLeft: "15px" }}
              className={classes.buttonText}
            >
              Coding Ninja
            </Typography>
          </Button>
          <Button href="/" style={{ paddingLeft: "20px" }}>
            <img
              width={25}
              height={25}
              src="https://www.freeiconspng.com/thumbs/profile-icon-png/am-a-19-year-old-multimedia-artist-student-from-manila--21.png"
              alt="Profile Icon"
            />
            <Typography
              style={{ paddingLeft: "15px" }}
              className={classes.buttonText}
            >
              Dhruv Rathi
            </Typography>
          </Button>
          <Button href="/" style={{ paddingLeft: "20px" }}>
            <img
              width={25}
              height={25}
              src="https://www.freeiconspng.com/thumbs/profile-icon-png/am-a-19-year-old-multimedia-artist-student-from-manila--21.png"
              alt="Profile Icon"
            />
            <Typography
              style={{ paddingLeft: "15px" }}
              className={classes.buttonText}
            >
              Akshay Saini
            </Typography>
          </Button>
          <Button href="/" style={{ paddingLeft: "20px" }}>
            <img
              width={25}
              height={25}
              src="https://www.freeiconspng.com/thumbs/profile-icon-png/am-a-19-year-old-multimedia-artist-student-from-manila--21.png"
              alt="Profile Icon"
            />
            <Typography
              style={{ paddingLeft: "15px" }}
              className={classes.buttonText}
            >
              Aditya Verma
            </Typography>
          </Button>
        </div>
      ) : (
        <div>
          <div>
            <Button href="/" className={classes.buttons}>
              <img
                width={32}
                height={32}
                src="https://static.thenounproject.com/png/3574480-200.png"
                alt="icon is loading"
              />
            </Button>
            <Typography
              style={{
                paddingLeft: "18px",
                fontSize: "10px",
                display: "flex",
                textAlign: "center",
              }}
            >
              Home
            </Typography>
          </div>
          <div>
            <Button href="/home" className={classes.buttons}>
              <img
                width={32}
                height={32}
                src="https://www.iconpacks.net/icons/5/free-icon-youtube-shorts-logo-15253.png"
                alt="icon is loading"
              />
            </Button>
            <Typography style={{ paddingLeft: "16px", fontSize: "10px" }}>
              Shorts
            </Typography>
          </div>
          <div>
            <Button href="/home" className={classes.buttons}>
              <img
                width={32}
                height={32}
                src="https://cdn.icon-icons.com/icons2/3237/PNG/512/menu_youtube_social_media_subs_subscription_icon_197393.png"
                alt="icon is loading"
              />
            </Button>
            <Typography style={{ paddingLeft: "8px", fontSize: "10px" }}>
              Subscription
            </Typography>
          </div>
          <div>
            <Button href="/home" className={classes.buttons}>
              <img
                width={22}
                height={22}
                src="https://static-00.iconduck.com/assets.00/video-library-icon-512x512-99oc4vo3.png"
                alt="icon is loading"
              />
            </Button>
            <Typography
              style={{
                paddingLeft: "16px",
                fontSize: "10px",
                textAlign: "left",
              }}
            >
              Library
            </Typography>
          </div>
        </div>
      )}
    </div>
  );
};

export default withStyles(styles)(Sidebar);
