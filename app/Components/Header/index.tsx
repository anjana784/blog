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
        className={`w-screen h-48 2xl:h-48 xl:h-44 lg:h-40 bg-lightBlack`}
        ref={headerSection}
      >
        <div className="w-[70%] 2xl:w-[70%] xl:w-[75%] lg:w-[80%] h-full m-auto">
          {/* logo section */}
          <div className="w-full h-[80%]">
            <div className="w-full h-full flex">
              <div className="w-[16%] h-full">
                <div className="w-full h-full flex justify-center items-center">
                  <div className="w-32 h-32 2xl:w-32 2xl:h-32 xl:w-28 xl:h-28 lg:w-24 lg:h-24 bg-customGray rounded-full">
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
                  <p className="text-primaryGold text-5xl 2xl:text-5xl xl:text-4xl lg:text-3xl">
                    anjana784
                  </p>
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
                    className="mr-8 2xl:mr-8 xl:mr-6 lg:mr-4 text-xl 2xl:text-xl xl:text-lg lg:text-base"
                  />
                  <NavItem
                    item="about"
                    currentSectionName={currentSectionName}
                    className="mr-8 2xl:mr-8 xl:mr-6 lg:mr-4 text-xl 2xl:text-xl xl:text-lg lg:text-base"
                  />
                  <NavItem
                    item="resume"
                    currentSectionName={currentSectionName}
                    className="mr-8 2xl:mr-8 xl:mr-6 lg:mr-4 text-xl 2xl:text-xl xl:text-lg lg:text-base"
                  />
                  <NavItem
                    item="projects"
                    currentSectionName={currentSectionName}
                    className="mr-8 2xl:mr-8 xl:mr-6 lg:mr-4 text-xl 2xl:text-xl xl:text-lg lg:text-base"
                  />
                  <NavItem
                    item="contact"
                    currentSectionName={currentSectionName}
                    className="mr-8 2xl:mr-8 xl:mr-6 lg:mr-4 text-xl 2xl:text-xl xl:text-lg lg:text-base"
                  />
                  {/* <NavItem
                    item="blog"
                    currentSectionName={currentSectionName}
                  /> */}
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>

      {/* skicky header */}
      {!headerShowing && (
        <header className="w-screen h-24 2xl:h-24 xl:h-20 lg:h-16 bg-lightBlack fixed top-0 left-0">
          <div className="w-[70%] 2xl:w-[70%] xl:w-[75%] lg:w-[80%] !h-full m-auto">
            <div className="w-full h-24 2xl:h-24 xl:h-20 lg:h-16 flex">
              <div className="w-[16%] h-full">
                <div className="w-full h-full flex justify-center items-center">
                  <div className="w-20 h-20 2xl:w-16 2xl:h-16 xl:w-14 xl:h-14 lg:w-12 lg:h-12 bg-[#393737] rounded-full">
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
                    className="mr-8 2xl:mr-8 xl:mr-6 lg:mr-4 text-lg 2xl:text-lg xl:text-base lg:text-sm"
                  />
                  <NavItem
                    item="about"
                    currentSectionName={currentSectionName}
                    className="mr-8 2xl:mr-8 xl:mr-6 lg:mr-4 text-lg 2xl:text-lg xl:text-base lg:text-sm"
                  />
                  <NavItem
                    item="resume"
                    currentSectionName={currentSectionName}
                    className="mr-8 2xl:mr-8 xl:mr-6 lg:mr-4 text-lg 2xl:text-lg xl:text-base lg:text-sm"
                  />
                  <NavItem
                    item="projects"
                    currentSectionName={currentSectionName}
                    className="mr-8 2xl:mr-8 xl:mr-6 lg:mr-4 text-lg 2xl:text-lg xl:text-base lg:text-sm"
                  />
                  <NavItem
                    item="contact"
                    currentSectionName={currentSectionName}
                    className="mr-8 2xl:mr-8 xl:mr-6 lg:mr-4 text-lg 2xl:text-lg xl:text-base lg:text-sm"
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
