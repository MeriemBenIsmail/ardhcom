import React from "react";
import AboutUs from "../components/home/AboutUs";
import Hero from "../components/home/Hero";
import Partners from "../components/home/Partner";
import Services from "../components/home/Services";
import Steps from "../components/home/Steps";
import WhoAreWe from "../components/home/WhoAreWe";
import Footer from "../components/shared/Footer";
export default function Home() {
  return (
    <div>
      <Hero></Hero>
      <AboutUs></AboutUs>
      <Services></Services>
      <Steps></Steps>
      <WhoAreWe></WhoAreWe>
     {/* <Partners></Partners>*/}
     <Footer></Footer>
    </div>
  );
}
