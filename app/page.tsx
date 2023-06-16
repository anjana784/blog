import { FC } from "react";
import Home from "./Components/Home";
import About from "./Components/About";
import Resume from "./Components/Resume";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Blog from "./Components/Blog";

const Main: FC = () => {
  return (
    <main className="bg-lightBlack w-[70%] rounded-md m-auto my-4">
      <Home />
      <About />
      <Resume />
      <Projects />
      <Contact />
      <Blog />
    </main>
  );
};

export default Main;
