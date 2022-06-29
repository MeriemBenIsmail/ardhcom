import React from "react";
import classes from "./Footer.module.css";
import deco from "../../assets/fgf.png";
import fb from "../../assets/facebook.svg";
import insta from "../../assets/instagram.svg";
import twitter from "../../assets/twitter.svg";
export default function Footer() {
  
  const handleFb = () => {
    window.location.href = "https://www.facebook.com/enactusinsat";
  }
  const handleInsta = () => {
    window.location.href = "https://www.instagram.com/enactusinsat/";
  }
  return (
    <div className={classes.footer} id="contact">
      <div className={classes.first}>
        <div className={classes.header}>
          <h1>أرضكم</h1>
          <div className={classes.deco}>
            <img src={deco} alt="" />
          </div>
        </div>
        <p className={classes.descr}>
           أرضكم هو موقع على شبكة الإنترنت يهدف إلى تقديم جميع أنواع الخدمات
          والتعليمات و الارشادات في مجال الفلاحة .تم تصميمه لتسهيل تعاملات
          المزارعين و الفلاحين مع مزودي الخدمات بفضل توفر العديد من جهات الاتصال
          و المعلومات في موقع واحد .باﻹضافة إلى مواكبتنا لحالة الطقس عبر تقديم
          تقارير يومية .
        </p>
      </div>
      <div className={classes.second}>
        <div className={classes.header}>
          <h1>إستكشاف</h1>
          <ul className={classes.links}>
            <li className={classes.link}><a href="#accueil">إستقبال</a></li>
            <li className={classes.link}><a href="#services">خدمات</a></li>
            <li className={classes.link}><a href="#news">أخبار</a></li>
            <li className={classes.link}><a href="#whoarewe">أحنا شكون؟</a></li>
            <li className={classes.link}><a href="#contact">إتّصل بنا</a></li>
            <li className={classes.link}>تسجيل دخول</li>
          </ul>
        </div>
      </div>
      <div className={classes.third}>
        <div className={classes.header}>
          <h1>اتّصل بنا</h1>
        </div>
        <p className={classes.descr}>
           لكل استفساراتكم تساؤلاتكم بخصوص موقعنا أو كيفية الاشتراك يرجى الاتصال
          بنا عبر البريد الالكتروني أو عبر صفحتنا على الفايسبوك أو الهاتف
        </p>
        <h2>Ardhcom.insat@gmail.com</h2>
        <h3>555 722 43</h3>
        <div className={classes.socials}>
          <div className={classes.img}>
            <img src={fb} onClick={handleFb} alt="" />
          </div>
          <div className={classes.img}>
            <img src={insta} onClick={handleInsta} alt="" />
          </div>
          <div className={classes.img}>
            <img src={twitter} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
