import React from "react";
import Hero from "../components/Hero";
import Features from "../components/Features";
import About from "../components/About";
import Services from "../components/Services";
import Donation from "../components/UpcomingEvents";
import Video from "../components/Video";
import OurActivites from "../components/OurActivites";
import UpcomingEvents from "../components/UpcomingEvents";
import SpritualClasses from "../components/SpritualClasses";
import BlogList from "../components/BlogList";
import Faq from "../components/Faq";
import VideoBanner from "../components/VideoBanner";
const Home = () => {
  return (
    <>
      {" "}
      <Hero />
      <Services />
      <About />
      <UpcomingEvents/>
      <VideoBanner videoSrc="\assets\shiv.webm"/>
      <OurActivites />
      <BlogList/>
      <Faq/>
    </>
  );
};

export default Home;
