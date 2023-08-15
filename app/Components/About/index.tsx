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
import Image from "next/image";
import heroImage from "./hero-image.png";

const About: FC = () => {
  const [startAbout, setStartAbout] = useState(false);

  return (
    <Section id="about">
      <div className="w-full h-[400px]  flex justify-center items-center">
        <div className="w-full">
          <div className="w-full h-full flex 2xl:flex 2xl:flex-row 2xl:items-center xl:flex xl:flex-row xl:items-center lg:flex lg:flex-row lg:items-center md:flex-col sm:flex-col xsm:flex-col">
            <div className="w-full h-full 2xl:w-1/2 xl:w-1/2 lg:w-1/2 flex ">
              <div>
                <h1 className="text-primaryGold text-4xl mt-0 2xl:text-4xl 2xl:mt-0 xl:text-3xl xl:mt-0 lg:text-2xl lg:mt-0 md:text-xl md:mt-8 sm:text-lg sm:mt-8 xsm:text-lg xsm:mt-8">
                  <TypeAnimation
                    sequence={[
                      "Hi, I'm anjana784",
                      () => {
                        setStartAbout(true);
                      },
                    ]}
                    speed={10}
                    wrapper="span"
                    cursor={true}
                    style={{ display: "inline-block" }}
                  />
                </h1>
                {startAbout && (
                  <>
                    <motion.h2
                      className="text-primaryWhite mt-4 w-full 2xl:w-full xl:w-full lg:w-full md:w-4/5 sm:w-4/5 xsm:w-4/5 text-lg 2xl:text-lg xl:text-lg lg:text-base md:text-sm sm:text-xs xsm:text-xs"
                      initial={{
                        opacity: 0,
                        y: 20,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      transition={{ duration: 2, delay: 0.75 }}
                    >
                      A Passionate Full-Stack Developer and Tech Enthusiast,
                      Transforming Ideas into Digital Reality
                    </motion.h2>
                    <motion.div
                      className="h-16 flex justify-between mt-8 w-56 2xl:w-56 xl:w-64 lg:w-64 md:w-56 sm:w-48 xsm:w-40"
                      initial={{
                        opacity: 0,
                        y: 20,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      transition={{ duration: 2, delay: 1 }}
                    >
                      <FaFacebookSquare className="text-primaryWhite text-2xl 2xl:text-2xl xl:text-xl lg:text-lg md:text-lg sm:text-lg xsm:text-lg" />
                      <FaTwitter className="text-primaryWhite text-2xl 2xl:text-2xl xl:text-xl lg:text-lg md:text-lg sm:text-lg xsm:text-lg" />
                      <FaInstagramSquare className="text-primaryWhite text-2xl 2xl:text-2xl xl:text-xl lg:text-lg md:text-lg sm:text-lg xsm:text-lg" />
                      <FaLinkedin className="text-primaryWhite text-2xl 2xl:text-2xl xl:text-xl lg:text-lg md:text-lg sm:text-lg xsm:text-lg" />
                      <FaGithub className="text-primaryWhite text-2xl 2xl:text-2xl xl:text-xl lg:text-lg md:text-lg sm:text-lg xsm:text-lg" />
                    </motion.div>
                  </>
                )}
              </div>
            </div>
            <div className="w-full h-full 2xl:w-1/2 xl:w-1/2 lg:w-1/2 flex justify-center items-center">
              {/* <Image src={heroImage} alt="anjana" className="w-full" /> */}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;
