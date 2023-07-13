"use client";
import Section from "../Section";
import { FC } from "react";
import { TypeAnimation } from "react-type-animation";

const Home: FC = () => {
  return (
    <Section id="home">
      <div className="w-full h-[600px] 2xl:h-[600px] xl:h-[620px] lg:h-[650px] md:h-[700px] sm:h-[750px] xsm:h-[800px] flex justify-center items-center">
        <div className="w-full h-[600px] 2xl:h-[600px] xl:h-[620px] lg:h-[650px] md:h-[700px] sm:h-[750px] xsm:h-[800px]">
          <div className="w-full h-full flex 2xl:flex 2xl:flex-row 2xl:items-center xl:flex xl:flex-row xl:items-center lg:flex lg:flex-row lg:items-center md:flex-col sm:flex-col xsm:flex-col">
            <div className="w-full h-full 2xl:w-1/2 xl:w-1/2 lg:w-1/2 flex items-center">
              <div>
                <h1 className="text-primaryGold text-4xl 2xl:text-4xl xl:text-3xl lg:text-2xl md:text-xl sm:text-lg xsm:text-lg">
                  <TypeAnimation
                    sequence={[
                      "Hi, I'm anjana784",
                      () => {
                        console.log("Sequence completed");
                      },
                    ]}
                    speed={10}
                    wrapper="span"
                    cursor={true}
                    style={{ display: "inline-block" }}
                  />
                </h1>
                <h2 className="text-primaryWhite mt-4 w-4/5 2xl:w-4/5 xl:w-4/5 lg:w-4/5 md:w-3/5 sm:w-2/5">
                  A Full Stack Developer Expert in JavaScript and MERN Stack.
                </h2>
              </div>
            </div>
            <div className="w-full h-full 2xl:w-1/2 xl:w-1/2 lg:w-1/2 flex justify-center items-center"></div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Home;
