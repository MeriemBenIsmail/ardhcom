import React from "react";
import classes from "./ServiceCard.module.css";

export default function ServiceCard({ title, descr, img }) {
  return (
    <div className={classes.card}>
      <div className={classes.info}>
        <h1>{title}</h1>
        <p>{descr}</p>
      </div>


     <img src={img} alt="" className={classes.img} />
    </div>
  );
}
