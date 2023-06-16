"use client";
import useStore from "@/app/Store";
import { FC, useEffect, useRef } from "react";

const Footer: FC = () => {
  const section = useRef<HTMLDivElement>(null);

  const setSections = useStore((state) => state.setSections);

  useEffect(() => {
    if (section.current) {
      setSections(section.current);
    }
  }, [setSections]);

  return (
    <footer
      id="footer"
      className="w-screen h-[200px] bg-lightBlack"
      ref={section}
    ></footer>
  );
};

export default Footer;
