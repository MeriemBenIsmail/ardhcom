import { React, useEffect } from "react";
import { Line } from "../../UI/line/Line";
import classes from "./AboutUs.module.css";
import first from "../../assets/te.jpg";
import second from "../../assets/batata.jpg";
import { Icon } from "@iconify/react";
import third from "../../assets/tree-leaf.png";
import { Button } from "../../UI/button/Button";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import deco from "../../assets/fgf.png";

export default function AboutUs() {
  return (
    <div>
      <motion.div className={classes.aboutUs} id="news">
        <div className={classes.right}>
          <div className={classes.intro}>
            <h3>حول أرضكم</h3>
            <p>أوّل موقع تونسي</p>
            <div className={classes.decorated}>
              <p>خاصّ بالفلاحة</p>
              <div className={classes.deco}>
                <img src={deco} alt="" />
              </div>
            </div>
          </div>
          <div className={classes.descr}>
            <p>
              أرضكم هو موقع على شبكة الإنترنت يهدف إلى تقديم جميع أنواع الخدمات
              والتعليمات و الارشادات في مجال الفلاحة .تم تصميمه لتسهيل تعاملات
              المزارعين و الفلاحين مع مزودي الخدمات بفضل توفر العديد من جهات
              الاتصال و المعلومات في موقع واحد .باﻹضافة إلى مواكبتنا لحالة الطقس
              عبر تقديم تقارير يومية .
            </p>
          </div>
          <div className={classes.icons}>
            <div className={classes.iconSection}>
              <span>نصائح فلاحيّة في جميع المجالات</span>
              <Icon
                width="40px"
                height="40px"
                icon="carbon:phone-outgoing-filled"
                color="#58824F"
              />
            </div>
            <div className={classes.iconSection}>
              <span>نصائح فلاحيّة في جميع المجالات</span>
              <Icon
                width="70px"
                height="70px"
                icon="openmoji:leafy-green"
                color="#58824F"
              />
            </div>
          </div>
          <div className={classes.descr}>
            <p>
              أول موقع إلكتروني في تونس يجمع كل الخدمات و العروض الخاصة بالفلاحة
              في صفحة ويب واحدة . أرضكم هو الموقع اﻷول في تونس الذي يوفر جميع
              أنواع الخدمات والتعليمات و الارشادات في مجال الفلاحة .تم تصميمه
              لتسهيل تعاملات المزارعين و الفلاحين مع مزودي الخدمات بفضل توفر
              العديد من جهات الاتصال و المعلومات في موقع واحد .باﻹضافة إلى
              مواكبتنا لحالة الطقس عبر تقديم تقارير يومية .
            </p>
          </div>
          <div className={classes.btn}>
            <Button content="إقرأ أكثر" color="#FABE4E"></Button>
          </div>
        </div>
        <div className={classes.left}>
          {/* <div className={classes.thirdImg}><img src={third} alt="" /></div>*/}
          <div className={classes.firstImg}>
            <img src={first} alt="" />
          </div>

          <div className={classes.secondImg}>
            <img src={second} alt="" />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
