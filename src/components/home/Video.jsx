import React from "react";
import poster from "../../assets/rre.jpg";
import vid from "../../assets/vid.mp4";
import classes from "./Video.module.css";

export default function Video() {
  return (
    <div className={classes.main}>
      <video src={vid} controls  />
    </div>
  );
}
