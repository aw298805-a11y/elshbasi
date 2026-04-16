import React from "react";
import TopNav from "./TopNav";
import PerfectSolution from "../components/PerfectSolution";
import ChatWhats from "../components/ChatWhats";
import LatestTrip from "../components/LatestTrip";
import BestSolution from "../components/BestSolution";
import FooterWeb from "../components/FooterWeb";
import FirstSection from "../components/FirstSection";
import ToTopButton from "../components/ScrollDown";

const HomeSection = () => {
  return (
    <>
      <ToTopButton />
      <TopNav />
      <FirstSection />
      <PerfectSolution />
      <ChatWhats />
      <LatestTrip />
      <BestSolution />
      <FooterWeb />
    </>
  );
};

export default HomeSection;
