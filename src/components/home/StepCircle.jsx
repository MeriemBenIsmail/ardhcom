import React from "react";
import classes from "./StepCircle.module.css";
import icon from '../../assets/telephone.png';

export default function StepCircle({number,icon,text}) {
  return (
    <div className={classes.circleContainer}>
      <div className={classes.circle}>
        <div className={classes.number}>{number}</div>
        <div className={classes.img}>
          <img src={icon} alt="" />
        </div>
      </div>
      <h2 className={classes.text}>{text}</h2>
    </div>
  );
}
