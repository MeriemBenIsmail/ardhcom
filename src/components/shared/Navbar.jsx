import React from 'react'
import { Button } from '../../UI/button/Button';
import classes from './Navbar.module.css';
import Link from 'react-router-dom';

export default function Navbar() {
  return (
    <div className={classes.navbar}>
        
        <ul className={classes.links}>
            <li className={classes.btn}>
                <Button content="  إشتراك" color="#FFAE13"></Button>
               
            </li>
            <li className={classes.link}>تسجيل دخول</li>
            <li className={classes.link}>إتّصل بنا</li>
            <li className={classes.link}>أحنا شكون؟</li>
            <li className={classes.link}>أخبار</li>
            <li className={classes.link}>خدمات</li>
            <li className={classes.link}>إستقبال</li>
        </ul>
        <div className={classes.logo}>
          <h1>أرضكم</h1>  
        </div>

    </div>
  )
}
