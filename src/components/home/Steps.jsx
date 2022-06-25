import React from "react";
import classes from "./Steps.module.css";
import { Line } from "../../UI/line/Line";
import StepCircle from "./StepCircle";
import phone from "../../assets/telephone.png";
import search from "../../assets/research.png";
import green from "../../assets/green-house.png";
import hand from "../../assets/handshake.png";
import arrow from '../../assets/arrow-right.png';
import deco from "../../assets/fgf.png";
export default function Steps() {
  return (
    <div className={classes.steps} >
      <div className={classes.header}>
        <h1>إتبع 4 خطوات سهلة</h1>
        <div className={classes.deco}>
          <img src={deco} alt="" />
        </div>
      </div>
      <div className={classes.stepsContainer}>
        <div>
          <StepCircle icon={green} text="إستمتع !" number="04"></StepCircle>
        </div>
        <div className={classes.arrow}>
            <img src={arrow} alt="" />
        </div>
        <div>
          <StepCircle icon={hand} text=" قابل الخبير" number="03"></StepCircle>
        </div>
        <div className={classes.arrow}>
            <img src={arrow} alt="" />
        </div>
        <div>
          <StepCircle icon={phone} text="إحجز موعد" number="02"></StepCircle>
        </div>
        <div className={classes.arrow}>
            <img src={arrow} alt="" />
        </div>
        <div className={classes.first}>
          <StepCircle
            icon={search}
            text="إبحث عن خبير"
            number="01"
          ></StepCircle>
        </div>
      </div>
    </div>
  );
}
