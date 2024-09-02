import React from "react";
import { withStyles } from "@mui/styles";
import { Grid } from "@mui/material";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Head from "./Head";

const styles = {
  mainDiv: {
    // color: "red",
  },
};
const Body = (props) => {
  const { classes } = props;
  const hamburger = useSelector((store) => store.app.isMenuOpen);
  // console.log("The hamburger change is in body", hamburger);
  return (
    <div className={classes.mainDiv}>
      <div>
        <Head />
      </div>
      {hamburger ? (
        <Grid container>
          <Grid item md={2}>
            <Sidebar />
          </Grid>
          <Grid item md={10}>
            <Outlet />
          </Grid>
        </Grid>
      ) : (
        <Grid container>
          <Grid item md={1}>
            <Sidebar />
          </Grid>
          <Grid item md={11}>
            <Outlet />
          </Grid>
        </Grid>
      )}
    </div>
  );
};

export default withStyles(styles)(Body);
