import { FC } from "react";
import Section from "../Section";
import Image from "next/image";

const About: FC = () => {
  return (
    <Section title="About me" id="about">
      <div className="w-full  flex justify-center items-center">
        <div className="w-full h-full flex flex-row">
          {/* <div className="w-1/2 h-full flex justify-center items-center">
            <Image
              src="/images/profile.svg"
              width={300}
              height={300}
              alt="about me"
            />
          </div> */}
          <div className="w-full h-full flex justify-center items-center">
            <p className="text-primaryWhite text-xl 2xl:text-xl xl:text-xl lg:text-xl md:text-sm sm:text-xs xsm:text-xs"></p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;
