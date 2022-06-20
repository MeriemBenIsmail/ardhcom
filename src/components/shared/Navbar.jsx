import React from "react";
import { Button } from "../../UI/button/Button";
import classes from "./Navbar.module.css";
import Link from "react-router-dom";
import { Icon } from "@iconify/react";
import { useState } from "react";
import Menu from "./Menu";
import leaf from "../../assets/tree-leaf.png";
export default function Navbar() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const toggleMenu = () => {
    setMenuIsOpen(!menuIsOpen);
  };
  const handleClose = () => {
    setMenuIsOpen(false);
  };
  return (
    <div className={classes.navbar}>
      <div className={classes.logo}>
        <div className={classes.toggle} onClick={toggleMenu}>
          <Icon
            icon="ant-design:menu-outlined"
            color="white"
            width="35px"
            height="35px"
          />
        </div>
        <div className={classes.img}>
          <img src={leaf} alt="" />
        </div>
        <h1>أرضكم</h1>
      </div>
      <ul className={classes.links}>
        <li className={classes.link}>إستقبال</li>
        <li className={classes.link}>خدمات</li>
        <li className={classes.link}>أخبار</li>
        <li className={classes.link}>أحنا شكون؟</li>
        <li className={classes.link}>إتّصل بنا</li>
        <li className={classes.link}>تسجيل دخول</li>
        <li className={classes.btn}>
          <Button content="  إشتراك" color="#FFAE13"></Button>
        </li>
      </ul>

      {menuIsOpen && (
        <div className={classes.menu}>
          {" "}
          <Menu close={handleClose} />{" "}
        </div>
      )}
    </div>
  );
}
