"use client";
import useStore from "@/app/Store";
import Section from "../Section";
import { FC, useEffect } from "react";

const Home: FC = () => {
  const sections = useStore((state) => state.sections);

  useEffect(() => {
    console.log(sections);
  }, [sections]);

  return <Section title="Home" id="home"></Section>;
};

export default Home;
