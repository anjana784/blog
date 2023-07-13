"use client";
import Section from "../Section";
import { FC } from "react";

const Home: FC = () => {
  return (
    <Section id="home">
      <div className="w-full h-[600px] 2xl:h-[600px] xl:h-[620px] lg:h-[650px] md:h-[700px] sm:h-[750px] xsm:h-[800px] flex justify-center items-center bg-primaryGold">
        <div className="w-full h-64 bg-primaryGold"></div>
      </div>
    </Section>
  );
};

export default Home;
