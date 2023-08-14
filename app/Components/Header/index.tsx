"use client";
import useStore from "@/app/Store";
import { FC, useEffect, useRef } from "react";
import NavItem from "../NavItem";

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
        className={`w-screen h-64 2xl:h-64 xl:h-52 lg:h-44 md:h-40 sm:h-32 xsm:h-28 bg-lightBlack border-b-[1px] border-b-solid border-b-customGray overflow-x-hidden`}
        ref={headerSection}
      >
        <div className="w-[70%] 2xl:w-[70%] xl:w-[75%] lg:w-[80%] md:w-[85%] sm:w-[90%] xsm:w-[95%] h-full m-auto">
          {/* logo section */}
          <div className="w-full h-[75%] ">
            <div className="w-full h-full flex">
              <div className="w-36 2xl:w-36 xl:w-32 lg:w-28 md:w-24 sm:w-16 xsm:w-12 h-full">
                <div className="w-full h-full flex justify-center items-center">
                  <div className="w-32 h-32 2xl:w-32 2xl:h-32 xl:w-28 xl:h-28 lg:w-24 lg:h-24 md:w-20 md:h-20 sm:w-16 sm:h-16 xsm:w-12 xsm:h-12 bg-customGray rounded-full">
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
              <div className="w-[calc(100%_-_144px)] 2xl:w-[calc(100%_-_144px)] xl:w-[calc(100%_-_128px)] lg:w-[calc(100%_-_112px)] md:w-[calc(100%_-_96px)] sm:w-[calc(100%_-_64px)] xsm:w-[calc(100%_-_48px)] h-full pl-4 flex justify-start items-center">
                <div className="w-full h-32 2xl:h-32 xl:h-28 lg:h-24 md:h-20 sm:h-16 xsm:h-10  flex flex-col justify-center">
                  <p className="text-primaryGold text-6xl 2xl:text-6xl xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl xsm:text-2xl">
                    anjana784
                  </p>
                  <p className="text-primaryGold opacity-70 text-lg 2xl:text-lg xl:text-lg lg:text-lg md:text-base sm:text-sm xsm:text-xs">
                    Developer<span className="px-1">|</span>Content Creator
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Nav Bar section */}
          <nav className="w-full h-[25%] ">
            <div className="w-full h-full flex">
              <div className="w-full h-full">
                <div className="w-full h-full flex">
                  <NavItem
                    item="about"
                    currentSectionName={currentSectionName}
                    className="text-xl 2xl:text-xl xl:text-lg lg:text-base md:text-sm sm:text-sm xsm:text-sm"
                  />
                  <NavItem
                    item="resume"
                    currentSectionName={currentSectionName}
                    className=" text-xl 2xl:text-xl xl:text-lg lg:text-base md:text-sm sm:text-sm xsm:text-sm"
                  />
                  <NavItem
                    item="projects"
                    currentSectionName={currentSectionName}
                    className=" text-xl 2xl:text-xl xl:text-lg lg:text-base md:text-sm sm:text-sm xsm:text-sm"
                  />
                  <NavItem
                    item="contact"
                    currentSectionName={currentSectionName}
                    className=" text-xl 2xl:text-xl xl:text-lg lg:text-base md:text-sm sm:text-sm xsm:text-sm"
                  />
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>

      {/* skicky header */}
      {!headerShowing && (
        <header className="w-screen h-24 2xl:h-24 xl:h-20 lg:h-16 md:h-12 sm:h-12 xsm:h-12 bg-lightBlack fixed top-0 left-0 border-b-[1px] border-b-solid border-b-customGray">
          <div className="w-[70%] 2xl:w-[70%] xl:w-[75%] lg:w-[80%] md:w-[85%] sm:w-[90%] xsm:w-[95%] !h-full m-auto">
            <div className="w-full h-24 2xl:h-24 xl:h-20 lg:h-16 md:h-12 sm:h-12 xsm:h-12 flex">
              {/* logo section */}
              <div className="w-20 2xl:w-20 xl:w-16 lg:w-16 md:w-10 sm:w-10 xsm:w-10 h-full">
                <div className="w-full h-full flex justify-center items-center">
                  <div className="w-20 h-20 2xl:w-20 2xl:h-20 xl:w-16 xl:h-16 lg:w-12 lg:h-12 md:w-10 md:h-10 sm:w-10 sm:h-10 xsm:w-10 xsm:h-10 bg-[#393737] rounded-full">
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
              <div className="w-[calc(100%_-_64px)] 2xl:w-[calc(100%_-_64px)] xl:w-[calc(100%_-_56px)] lg:w-[calc(100%_-_48px)] md:w-[calc(100%_-_32px)] sm:w-[calc(100%_-_32px)] xsm:w-[calc(100%_-_32px)] h-full flex items-end">
                <nav className="w-full flex items-end h-full">
                  <NavItem
                    item="about"
                    currentSectionName={currentSectionName}
                    className=" text-xl 2xl:text-xl xl:text-lg lg:text-base md:text-sm sm:text-xs xsm:text-xs"
                  />
                  <NavItem
                    item="resume"
                    currentSectionName={currentSectionName}
                    className=" text-xl 2xl:text-xl xl:text-lg lg:text-base md:text-sm sm:text-xs xsm:text-xs"
                  />
                  <NavItem
                    item="projects"
                    currentSectionName={currentSectionName}
                    className=" text-xl 2xl:text-xl xl:text-lg lg:text-base md:text-sm sm:text-xs xsm:text-xs"
                  />
                  <NavItem
                    item="contact"
                    currentSectionName={currentSectionName}
                    className=" text-xl 2xl:text-xl xl:text-lg lg:text-base md:text-sm sm:text-xs xsm:text-xs"
                  />
                  {/* <NavItem
                    item="blog"
                    currentSectionName={currentSectionName}
                  /> */}
                </nav>
              </div>
            </div>
          </div>
        </header>
      )}
    </>
  );
};

export default Header;
