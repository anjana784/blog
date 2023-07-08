"use client";
import { FC, useEffect, useRef } from "react";
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

  const observer = useRef<IntersectionObserver | null>(null);

  // obserce the sections
  useEffect(() => {
    observer.current = new IntersectionObserver(
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

    if (sections.length > 0) {
      sections.forEach((section) => {
        observer.current?.observe(section);
      });
    }

    return () => {
      if (observer.current) {
        sections.forEach((section) => {
          observer.current?.unobserve(section);
        });
      }
    };
  }, [sections, setCurrentSectionName, setHeaderShowing]);

  useEffect(() => {
    console.log(currentSectionName);
  }, [currentSectionName]);

  return (
    <main className="bg-lightBlack w-[70%] 2xl:w-[70%] xl:w-[75%] lg:w-[80%] rounded-md m-auto my-4">
      <Home />
      <About />
      <Resume />
      <Projects />
      <Contact />
      {/* <Blog /> */}
    </main>
  );
};

export default Main;
