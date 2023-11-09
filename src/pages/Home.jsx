import React from "react";
import AboutUs from "../components/home/AboutUs";
import Hero from "../components/home/Hero";
import Partners from "../components/home/Partner";
import Services from "../components/home/Services";
import Steps from "../components/home/Steps";
import Video from "../components/home/Video";
import WhoAreWe from "../components/home/WhoAreWe";
import Footer from "../components/shared/Footer";
export default function Home() {
  console.log('Hi Fluentd')
  return (
    <div style={{overflowX:"hidden",overflowY:"hidden"}}>
      <Hero></Hero>
      <AboutUs></AboutUs>
      <Services></Services>
      <Steps></Steps>
      <WhoAreWe></WhoAreWe>
      <Video></Video>
     {/* <Partners></Partners>*/}
      <Footer></Footer>
    </div>
  );
}
