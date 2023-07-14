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
            <p className="text-primaryWhite">
              Hello again! You've met me as a developer in the Home section, but
              let's delve a bit deeper. I'm Anjana, hailing from Sri Lanka, and
              I started my coding journey as a self-taught developer before my
              formal studies. This ability to teach myself has made me a fast
              learner, always ready to dive into new technologies. I've already
              dipped my toes into fascinating areas like blockchain and AI.
              <br />
              <br />
              Outside of code, I'm a fan of sci-fi and classical Eastern music -
              a blend of the future and the past, just like in technology!
              <br />
              <br />
              As for my profession, I create dynamic web and mobile apps with
              tools like the MERN stack, Next.js, React Native, and Electron.
              TypeScript is my reliable sidekick for its precision. I'm also at
              ease with DevOps, thanks to my experience with Linux, Nginx, and
              Docker. And let's not forget about the visual experiences I craft
              with Three.js, WebGL, and shaders!
              <br />
              <br />
              My time at Sabaragamuwa University has polished my software
              engineering and project management skills, which I apply to each
              project I undertake.
              <br />
              So, if you're looking for a developer who's quick to learn,
              passionate, and reliable, don't hesitate to reach out. I'm here to
              help turn your ideas into reality.
              <br />
              <br />
              Feel free to continue exploring my portfolio. The next section is
              'Resume', where you'll find a more detailed overview of my
              experiences, skills, and qualifications. See you there!"
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;
