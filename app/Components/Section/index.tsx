"use client";
import { FC, ReactNode, useEffect, useRef } from "react";
import SectionTitile from "../SectionTitle";
import SectionContent from "../SectionContent";
import useStore from "@/app/Store";

interface Props {
  title?: string;
  children?: ReactNode;
  id: string;
}

const Section: FC<Props> = ({ title, children, id }) => {
  const section = useRef<HTMLDivElement>(null);

  const setSections = useStore((state) => state.setSections);

  useEffect(() => {
    if (section.current) {
      setSections(section.current);
    }
  }, [setSections]);

  return (
    <section
      className="min-h-[700px] p-24 2xl:p-24 xl:p-20 lg:p-16 md:p-12 sm:p-8 xsm:p-4 bg-lightBlack"
      id={id}
      ref={section}
    >
      <div className="w-full hidden 2xl:hidden xl:block xl:h-4 lg:block lg:h-8 md:block md:h-8 sm:block sm:h-8 xsm:block xsm:h-12"></div>
      {title && <SectionTitile title={title} />}
      <SectionContent>{children}</SectionContent>
    </section>
  );
};

export default Section;
