import React from "react";
import { Button } from "../../UI/button/Button";
import classes from "./SearchBar.module.css";
import { Icon } from "@iconify/react";
export default function SearchBar() {
  return (
    <div className={classes.searchBar}>
      <div className={classes.bar}>
        <div className={classes.innerBar}>
          <div className={classes.search}>
            <input type="text" placeholder="نوع الخدمات" />
            <div className={classes.icon}>
              <Icon
                icon="bx:category"
                width="20px"
                height="20px"
                color="black"
              />
            </div>
          </div>
          <div className={classes.search}>
            <input type="text" placeholder="الولاية" />
            <div className={classes.icon}>
              <Icon icon="bxs:map" width="20px" height="20px" color="black" />
            </div>
          </div>
          <div className={classes.search}>
            <input type="text" placeholder="إبحث" />
            <div className={classes.icon}>
              <Icon
                width="20px"
                height="20px"
                icon="akar-icons:search"
                color="black"
              />
            </div>
          </div>
          <div className={classes.btn}>إبحث</div>
        </div>
      </div>
    </div>
  );
}
