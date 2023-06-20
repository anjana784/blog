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
    <section className="h-[700px] pt-[110px]" id={id} ref={section}>
      {title && <SectionTitile title={title} />}
      <SectionContent>{children}</SectionContent>
    </section>
  );
};

export default Section;
