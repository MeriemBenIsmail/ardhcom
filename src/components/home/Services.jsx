import React from "react";
import { Line } from "../../UI/line/Line";
import ServiceCard from "./ServiceCard";
import classes from "./Services.module.css";
import one from "../../assets/well.jpg";
import two from "../../assets/rre.jpg";
import three from "../../assets/batata.jpg";
import four from "../../assets/bagra.jpg";
import deco from "../../assets/fgf.png";
export default function Services() {
  return (
    <div className={classes.service} id="services">
      <div className={classes.header}>
        <h1>الخدمات التّي نقدمها</h1>
        <div className={classes.deco}>
          <img src={deco} alt="" />
        </div>
      </div>
      <div className={classes.cardContainer}>
        <ServiceCard
          title="خدمات بيطريّة"
          descr=" خدمات بيطريّةخدمات بيطريّة خدمات بيطريّة خدمات بيطريّةخدمات بيطريّة "
          img={one}
        ></ServiceCard>
        <ServiceCard
          title="خدمات زراعة"
          descr=" خدمات بيطريّةخدمات بيطريّة خدمات بيطريّة خدمات بيطريّةخدمات بيطريّة "
          img={two}
        ></ServiceCard>
        <ServiceCard
          title="معدات زراعة"
          descr=" خدمات بيطريّةخدمات بيطريّة خدمات بيطريّة خدمات بيطريّةخدمات بيطريّة "
          img={three}
        ></ServiceCard>
        <ServiceCard
          title="خدمات مياه"
          descr=" خدمات بيطريّةخدمات بيطريّة خدمات بيطريّة خدمات بيطريّةخدمات بيطريّة "
          img={four}
        ></ServiceCard>
      </div>
    </div>
  );
}
