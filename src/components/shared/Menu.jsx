import React from "react";
import classes from "./Menu.module.css";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import { Button } from "../../UI/button/Button";
const variants = {
  hidden: {
    opacity: 0,
    y: "-200%",
  },
  visible: {
    opacity: 1,
    y: "0",
  },
};
export default function Menu({ close }) {
  const changeCursor = () => {
    const cursor = document.querySelector(".cursor");
    console.log(cursor);
    /*   document.addEventListener('mousemove', (e) => {
      cursor.setAttribute('style','left:'+e.pageX + 'px')
      cursor.setAttribute('style','top:'+e.pageX + 'px')
    });*/
  };

  return (
    <div className={classes.menu_container}>
      <div className={classes.icon} onClick={close}>
        <Icon icon="ep:close-bold" color="white" />
      </div>
      <div className={classes.menu_wrapper}>
        <ul className={classes.menu}>
          <li className={classes.link}>إستقبال</li>
          <li className={classes.link}>خدمات</li>
          <li className={classes.link}>أخبار</li>
          <li className={classes.link}>أحنا شكون؟</li>
          <li className={classes.link}>إتّصل بنا</li>
          <li className={classes.link}>تسجيل دخول</li>
          <li className={classes.btn}>
            <Button content="إشتراك" color="#815E1A"></Button>
          </li>
        </ul>
      </div>
    </div>
  );
}
