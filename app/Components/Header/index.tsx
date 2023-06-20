"use client";
import useStore from "@/app/Store";
import Link from "next/link";
import { FC, useEffect, useRef, useState } from "react";
import NavItem from "../NavItem";
// import Image from "next/image";
import profileImg from "@/public/images/profile.svg";

const Header: FC = () => {
  // declare the header section with useRef
  const headerSection = useRef<HTMLDivElement>(null);

  const [currntSection, setCurrentSection] = useState("");

  // get secSection and headerShowing from the state
  const { setSections, headerShowing, currentSectionName } = useStore(
    (state) => state
  );

  useEffect(() => {
    setCurrentSection(currentSectionName);
  }, [currentSectionName]);

  // push the headerSection into sections
  useEffect(() => {
    if (headerSection.current) {
      setSections(headerSection.current);
    }
  }, [setSections]);

  return (
    <>
      {/* main header */}
      <header
        id="header"
        className={`w-screen h-[200px] bg-lightBlack `}
        ref={headerSection}
      >
        <div className="w-[70%] h-full m-auto">
          {/* logo section */}
          <div className="w-full h-[80%]">
            <div className="w-full h-full flex">
              <div className="w-[20%] h-full">
                <div className="w-full h-full flex justify-center items-center">
                  <div className="w-32 h-32 bg-[#393737] rounded-full"></div>
                </div>
              </div>
              <div className="w-[84%] h-full">
                <div className="w-full h-full flex items-center">
                  <p className="text-primaryGold text-5xl px-4">anjana784</p>
                </div>
              </div>
            </div>
          </div>
          {/* Nav Bar section */}
          <nav className="w-full h-[20%]">
            <div className="w-full h-full flex">
              <div className="w-[16%] h-full"></div>
              <div className="w-[84%] h-full">
                <div className="w-full h-full flex">
                  <NavItem
                    item="home"
                    currentSectionName={currentSectionName}
                  />
                  <NavItem
                    item="about"
                    currentSectionName={currentSectionName}
                  />
                  <NavItem
                    item="resume"
                    currentSectionName={currentSectionName}
                  />
                  <NavItem
                    item="projects"
                    currentSectionName={currentSectionName}
                  />
                  <NavItem
                    item="contact"
                    currentSectionName={currentSectionName}
                  />
                  <NavItem
                    item="blog"
                    currentSectionName={currentSectionName}
                  />
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>

      {/* skicky header */}
      {!headerShowing && (
        <header className="w-screen h-[100px] bg-lightBlack fixed top-0 left-0">
          <div className="w-[70%] h-full m-auto">
            <nav className="w-full h-full">
              <div className="w-full h-full flex">
                <div className="w-[16%] h-full">
                  <div className="w-full h-full flex justify-center items-center">
                    <div className="w-16 h-16 bg-[#393737] rounded-full"></div>
                  </div>
                </div>
                <div className="w-[84%] h-full">
                  <div className="w-full flex items-end h-full">
                    <NavItem
                      item="home"
                      currentSectionName={currentSectionName}
                    />
                    <NavItem
                      item="about"
                      currentSectionName={currentSectionName}
                    />
                    <NavItem
                      item="resume"
                      currentSectionName={currentSectionName}
                    />
                    <NavItem
                      item="projects"
                      currentSectionName={currentSectionName}
                    />
                    <NavItem
                      item="contact"
                      currentSectionName={currentSectionName}
                    />
                    <NavItem
                      item="blog"
                      currentSectionName={currentSectionName}
                    />
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </header>
      )}
    </>
  );
};

export default Header;
