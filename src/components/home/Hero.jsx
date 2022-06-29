import { React, useEffect } from "react";
import classes from "./Hero.module.css";
import Navbar from "../shared/Navbar";
import line from "../../assets/line.svg";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SearchBar from "./SearchBar";
export default function Hero() {
  const { ref, inView } = useInView({
    threshold: 0.2, //20% should be visible
  });

  //ref : element that we want to monitor : when ref in view => inView =true , else false
  const animation = useAnimation();

  useEffect(() => {
    // 3 hooks
    if (inView) {
      animation.start({
        y: 10,
        opacity: 1,
        transition: {
          type: "spring",
          duration: 1.2,
          bounce: 0.2,
        },
      });
    }
    if (!inView) {
      animation.start({
        y: "-90vh",
        opacity: 0,
        transition: {
          type: "spring",
          duration: 1,
          bounce: 0,
        },
      });
    }
  }, [inView]);
  return (
    <div ref={ref} className={classes.hero}>
    <Navbar></Navbar>

      <div>
        {" "}
        <motion.div className={classes.introduction} animate={animation}>
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
        </motion.div>
      </div>
    </div>
  );
}
