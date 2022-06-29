import React from "react";
import classes from "./Partners.module.css";
import partner from "../../assets/male-farmer.svg";
import PartnerCard from "./PartnerCard";
export default function Partners() {
  const partners = [
    "partner1",
    "partner2",
    "partner3",
    "partner4",
    "partner5",
    "partner6",
    "partner7",
    "partner8",
    "partner9",
  ];
  return (
    <div className={classes.slider}>
      <div
        className={classes.slide_track}
        style={{ width: `calc(400px * ${partners.length})` }}
      >
        {partners.map((item, index) => (
          <div className={classes.slide}><PartnerCard photo={partner}></PartnerCard></div>
          
        ))}

        {partners.map((item, index) => (
          <div className={classes.slide}><PartnerCard photo={partner}></PartnerCard></div>
        ))}
        
      </div>
    </div>
  );
}
