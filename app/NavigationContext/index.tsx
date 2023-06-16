"use client";
import {
  ReactNode,
  createContext,
  useState,
  Dispatch,
  SetStateAction,
} from "react";

export const NavigationContext = createContext(
  {} as {
    currentSection:
      | "home"
      | "about"
      | "resume"
      | "projects"
      | "contact"
      | "blog";
    setCurrentSection: Dispatch<
      SetStateAction<
        "home" | "about" | "resume" | "projects" | "contact" | "blog"
      >
    >;
  }
);

const NavigationProvider = ({ children }: { children: ReactNode }) => {
  const [currentSection, setCurrentSection] = useState<
    "home" | "about" | "resume" | "projects" | "contact" | "blog"
  >("home");

  return (
    <NavigationContext.Provider value={{ currentSection, setCurrentSection }}>
      {children}
    </NavigationContext.Provider>
  );
};

export default NavigationProvider;
