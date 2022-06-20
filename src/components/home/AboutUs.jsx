import React from "react";
import { Line } from "../../UI/line/Line";
import classes from "./AboutUs.module.css";
import first from '../../assets/te.jpg';
import second from '../../assets/batata.jpg';
import { Icon } from '@iconify/react';
import third from '../../assets/tree-leaf.png';
import { Button } from "../../UI/button/Button";

export default function AboutUs() {
  return (
    <div className={classes.aboutUs}>
      <div className={classes.right}>
        <div className={classes.intro}>
          <h3>حول أرضكم</h3>
          <p>أوّل موقع تونسي</p>
          <div className={classes.decorated}>
            <p>خاصّ بالفلاحة</p>
            <Line color="#FFAE13"></Line>
          </div>
        </div>
        <div className={classes.descr}>
          <p>
            أوّل موقع تونسي خاصّ بالفلاحةأوّل موقع تونسي خاصّ بالفلاحةأوّل موقع
            تونسي خاصّ بالفلاحةأوّل موقع تونسي خاصّ بالفلاحةأوّل موقع تونسي خاصّ
            بالفلاحةأوّ أوّل موقع تونسي خاصّ بالفلاحة ل موقع تونسي خاصّ بالفلاحة
            أوّل موقع تونسي خاصّ بالفلاحة
          </p>
        </div>
        <div className={classes.icons}>
            <div className={classes.iconSection}>
                <span>نصائح فلاحيّة في جميع المجالات</span>
                <Icon width="40px" height="40px" icon="carbon:phone-outgoing-filled" color="#58824F" />
                
            </div>
            <div className={classes.iconSection}>
                <span>نصائح فلاحيّة في جميع المجالات</span>
                <Icon width="70px" height="70px" icon="openmoji:leafy-green" color="#58824F" />
                
            </div>
            
        </div>
        <div className={classes.descr}>
          <p>
            أوّل موقع تونسي خاصّ بالفلاحةأوّل موقع تونسي خاصّ بالفلاحةأوّل موقع
            تونسي خاصّ بالفلاحةأوّل موقع تونسي خاصّ بالفلاحةأوّل موقع تونسي خاصّ
            
          </p>
        </div>
        <div className={classes.btn}>
            <Button content="إقرأ أكثر" color="#FABE4E"></Button>
        </div>
      </div>
      <div className={classes.left}>
      <div className={classes.thirdImg}><img src={third} alt="" /></div>
        <div className={classes.firstImg}><img src={first} alt="" /></div>
       
        <div className={classes.secondImg}><img src={second} alt="" /></div>
      </div>
    </div>
  );
}
