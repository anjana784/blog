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
    sections: HTMLDivElement[];
    setSections: Dispatch<SetStateAction<HTMLDivElement[]>>;
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
  const [sections, setSections] = useState<HTMLDivElement[]>([]);

  const [currentSection, setCurrentSection] = useState<
    "home" | "about" | "resume" | "projects" | "contact" | "blog"
  >("home");

  return (
    <NavigationContext.Provider
      value={{ currentSection, setCurrentSection, sections, setSections }}
    >
      {children}
    </NavigationContext.Provider>
  );
};

export default NavigationProvider;
