"use client";
import useStore from "@/app/Store";
import { FC, useEffect, useRef } from "react";

const Header: FC = () => {
  // declare the header section with useRef
  const headerSection = useRef<HTMLDivElement>(null);

  // get secSection and headerShowing from the state
  const { setSections, headerShowing } = useStore((state) => state);

  // push the headerSection into sections
  useEffect(() => {
    if (headerSection.current) {
      setSections(headerSection.current);
    }
  }, [setSections]);

  return (
    <>
      <header
        id="header"
        className={`w-screen h-[200px] bg-lightBlack `}
        ref={headerSection}
      >
        <div className="w-[70%] h-full m-auto"></div>
      </header>
      {!headerShowing && (
        <header className="w-screen h-[100px] bg-lightBlack fixed top-0 left-0">
          <div className="w-[70%] h-full m-auto"></div>
        </header>
      )}
    </>
  );
};

export default Header;
