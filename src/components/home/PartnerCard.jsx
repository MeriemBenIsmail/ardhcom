import React from "react";
import classes from "./PartnerCard.module.css";
/*import {motion} from 'framer-motion';


const cardVariants = {
  hover: {
    opacity: 0.8
  }
}*/
export default function PartnerCard(props) {
  return (
    <div className={classes.profil}>
      <img src={props.photo} alt="" className={classes.img} />
    </div>
  );
}
