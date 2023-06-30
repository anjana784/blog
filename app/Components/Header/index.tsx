"use client";
import useStore from "@/app/Store";
import Link from "next/link";
import { FC, useEffect, useRef, useState } from "react";
import NavItem from "../NavItem";
import Image from "next/image";
import profileImg from "@/public/images/profile.svg";

const Header: FC = () => {
  // declare the header section with useRef
  const headerSection = useRef<HTMLDivElement>(null);

  // get secSection and headerShowing from the state
  const { setSections, headerShowing, currentSectionName } = useStore(
    (state) => state
  );

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
        className={`w-screen h-[200px] max-lg:h-[150px] max-md:h-[100px] bg-lightBlack `}
        ref={headerSection}
      >
        <div className="w-[70%] max-lg:w-[70%] max-md:w-[80%] h-full m-auto">
          {/* logo section */}
          <div className="w-full h-[80%]">
            <div className="w-full h-full flex">
              <div className="w-[20%] h-full">
                <div className="w-full h-full flex justify-center items-center">
                  <div className="w-32 h-32 max-lg:w-28 max-lg:h-28 max-md:w-16 max-md:h-16 bg-customGray rounded-full">
                    <div
                      style={{
                        width: "100%",
                        height: "100%",
                        backgroundImage: `url(/images/profile.svg)`,
                        backgroundSize: "cover",
                        borderRadius: "50%",
                      }}
                    ></div>
                  </div>
                </div>
              </div>
              <div className="w-[84%] h-full">
                <div className="w-full h-full flex items-center">
                  <p className="text-primaryGold text-5xl max-lg:text-4xl px-4 max-lg:px-3 max-md:text-2xl max-md:px-0">
                    anjana784
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Nav Bar section */}
          <nav className="w-full h-[20%]">
            <div className="w-full h-full flex">
              <div className="w-[16%] h-full max-md:hidden"></div>
              <div className="w-[84%] h-full max-md:px-3">
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
        <header className="w-screen h-[100px] max-lg:h-[75px] max-md:[50px] bg-lightBlack fixed top-0 left-0">
          <div className="w-[70%] max-lg:w-[75%] max-md:[80%] h-full m-auto">
            <div className="w-full h-full">
              <div className="w-full h-full flex">
                {/* logo section */}
                <div className="w-[16%] h-full">
                  <div className="w-full h-full flex justify-center items-center">
                    <div className="w-16 h-16 max-lg:w-14 max-lg:h-14 max-md:w-12 max-md:h-12 bg-[#393737] rounded-full">
                      <div
                        style={{
                          width: "100%",
                          height: "100%",
                          backgroundImage: `url(/images/profile.svg)`,
                          backgroundSize: "cover",
                          borderRadius: "50%",
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
                {/* navbar section */}
                <div className="w-[84%] h-full">
                  <nav className="w-full flex items-end h-full">
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
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </header>
      )}
    </>
  );
};

export default Header;
