"use client";
import { FC, useEffect, useMemo } from "react";
import Home from "./Components/Home";
import About from "./Components/About";
import Resume from "./Components/Resume";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Blog from "./Components/Blog";
import useStore from "./Store";

const Main: FC = () => {
  // get sections, setHeaderShowing, setCurrentSectionName, currentSectionName from the state
  const {
    sections,
    setHeaderShowing,
    setCurrentSectionName,
    currentSectionName,
  } = useStore((state) => state);

  // instanciate a new IntersectionObserver and return using the useMemo
  const observer = useMemo(() => {
    return new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // setHeaderShowing
          if (entry.target.id === "header") {
            setHeaderShowing(entry.isIntersecting);
          } else if (entry.isIntersecting) {
            setCurrentSectionName(entry.target.id);
          }
        });
      },
      {
        threshold: 0.5,
      }
    );
  }, [setCurrentSectionName, setHeaderShowing]);

  // obserce the sections
  useEffect(() => {
    if (sections.length > 0) {
      sections.forEach((section) => {
        observer.observe(section);
      });
    }
  }, [observer, sections]);

  useEffect(() => {
    console.log(currentSectionName);
  }, [currentSectionName]);

  return (
    <main className="bg-lightBlack w-[70%] rounded-md m-auto my-4">
      <Home />
      <About />
      <Resume />
      <Projects />
      <Contact />
      <Blog />
    </main>
  );
};

export default Main;
