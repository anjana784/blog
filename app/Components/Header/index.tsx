"use client";
import useStore from "@/app/Store";
import { FC, useEffect, useRef } from "react";

const Header: FC = () => {
  const section = useRef<HTMLDivElement>(null);

  const setSections = useStore((state) => state.setSections);

  useEffect(() => {
    if (section.current) {
      setSections(section.current);
    }
  }, [setSections]);

  return (
    <header
      id="header"
      className="w-screen h-[200px] bg-lightBlack"
      ref={section}
    >
      <div className="w-[70%] h-full m-auto"></div>
    </header>
  );
};

export default Header;
