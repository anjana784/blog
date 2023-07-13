"use client";
import Section from "../Section";
import { FC, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import {
  FaFacebookSquare,
  FaTwitter,
  FaInstagramSquare,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

const Home: FC = () => {
  const [startHome, setStartHome] = useState(false);

  return (
    <Section id="home">
      <div className="w-full h-[600px] 2xl:h-[600px] xl:h-[620px] lg:h-[650px] md:h-[700px] sm:h-[750px] xsm:h-[800px] flex justify-center items-center">
        <div className="w-full h-[600px] 2xl:h-[600px] xl:h-[620px] lg:h-[650px] md:h-[700px] sm:h-[750px] xsm:h-[800px]">
          <div className="w-full h-full flex 2xl:flex 2xl:flex-row 2xl:items-center xl:flex xl:flex-row xl:items-center lg:flex lg:flex-row lg:items-center md:flex-col sm:flex-col xsm:flex-col">
            <div className="w-full h-full 2xl:w-1/2 xl:w-1/2 lg:w-1/2 flex items-center 2xl:items-center xl:items-center lg:items-center md:items-start sm:items-start xsm:items-start">
              <div>
                <h1 className="text-primaryGold text-4xl mt-0 2xl:text-4xl 2xl:mt-0 xl:text-3xl xl:mt-0 lg:text-2xl lg:mt-0 md:text-xl md:mt-8 sm:text-lg sm:mt-8 xsm:text-lg xsm:mt-8">
                  <TypeAnimation
                    sequence={[
                      "Hi, I'm anjana784",
                      () => {
                        setStartHome(true);
                      },
                    ]}
                    speed={10}
                    wrapper="span"
                    cursor={true}
                    style={{ display: "inline-block" }}
                  />
                </h1>
                {startHome && (
                  <motion.h2
                    className="text-primaryWhite mt-4 w-4/5 2xl:w-4/5 xl:w-4/5 lg:w-4/5 md:w-3/5 sm:w-2/5"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                  >
                    A Professional Full-Stack Developer Experienced in Trending
                    JavaScript Technologies like Next.js, MERN Stack, and React
                    Native. Curious to Know More? Jump into the About Section.
                  </motion.h2>
                )}
                {/* <div className="h-16 flex justify-between mt-2 w-2/5">
                  <FaFacebookSquare className="text-primaryWhite text-2xl 2xl:text-2xl xl:text-xl lg:text-lg md:text-lg sm:text-lg xsm:text-lg" />
                  <FaTwitter className="text-primaryWhite text-2xl 2xl:text-2xl xl:text-xl lg:text-lg md:text-lg sm:text-lg xsm:text-lg" />
                  <FaInstagramSquare className="text-primaryWhite text-2xl 2xl:text-2xl xl:text-xl lg:text-lg md:text-lg sm:text-lg xsm:text-lg" />
                  <FaLinkedin className="text-primaryWhite text-2xl 2xl:text-2xl xl:text-xl lg:text-lg md:text-lg sm:text-lg xsm:text-lg" />
                  <FaGithub className="text-primaryWhite text-2xl 2xl:text-2xl xl:text-xl lg:text-lg md:text-lg sm:text-lg xsm:text-lg" />
                </div> */}
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
