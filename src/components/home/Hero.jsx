import React from "react";
import classes from "./Hero.module.css";
import Navbar from "../shared/Navbar";
import line from "../../assets/line.svg";
import { Line } from "../../UI/line/Line";
import Menu from "../shared/Menu";
import SearchBar from "./SearchBar";
export default function Hero() {
  return (
    <div className={classes.hero}>
      {<Navbar></Navbar>}

      <div className={classes.introduction}>
        <div className={classes.first}>
          <h1> مرحبا بك في </h1>
          <div className={classes.decorH1}>
            <h1>أرضكم</h1>

            <div className={classes.line}>
              <img src={line} alt="" />
            </div>
          </div>
        </div>

        <h3>حدد موعداً سريعاً مع خبيرك</h3>
        <h5>
          حدد نوع الخبير، اختر الولاية ، اخترتاريخ و وقت موعدك. الأمر بهذه
          البساطة
        </h5>
        <div className={classes.search}>
          <div className={classes.search}>
            <SearchBar></SearchBar>
          </div>
        </div>
      </div>
    </div>
  );
}
