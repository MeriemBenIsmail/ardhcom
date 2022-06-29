import React from "react";
import enactus from "../../assets/enac.png";
import classes from "./WhoAreWe.module.css";
import deco from "../../assets/fgf.png";
import icon1 from "../../assets/male-farmer.svg";
import icon2 from "../../assets/partnership.svg";
export default function WhoAreWe() {
  return (
    <div className={classes.whoarewe} id="whoarewe">
      <div className={classes.right}>
        <div className={classes.intro}>
          <p>أحنا شكون</p>
          <div className={classes.deco}>
            <img src={deco} alt="" />
          </div>
        </div>
        <div className={classes.descr}>
          <p>
            أحنا طلبة من المعهد العالي للعلوم التطبيقية والتكنولوجيا. هدفنا هو
            تطوير الفلاحة في تونس لمدى تأثيرها على تطور البلاد و تحقيق الأمن
            الغذائي. نؤمنو إلي العالم اليوم عالم تكنولوجي بالاساس ونؤمن بقيمة
            التكنولوجيا في خدمة كل المجالات وبالأخص مجال الفلاحة. هاذاكا علاش
            اليوم ابتكرنا مشروع ارضكم. اختاروا ارضكم لمستقبل مثمر.
          </p>
        </div>

        <div className={classes.features}>
          <div className={classes.item}>
            <div className={classes.icon}>
              <img src={icon1} alt="" />
            </div>
            <div className={classes.txt}>
              <h1>5000</h1>
              <p>وّل موقع تونسي خاصّ بالفلاحةوّل</p>
            </div>
          </div>
          <div className={classes.item}>
            <div className={classes.icon}>
              <img src={icon2} alt="" />
            </div>
            <div className={classes.txt}>
              <h1>420</h1>
              <p>وّل موقع تونسي خاصّ بالفلاحةوّل</p>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.left}>
        <img src={enactus} alt="" />
      </div>
    </div>
  );
}
