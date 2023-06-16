"use client";
import { FC, ReactNode, useContext, useEffect, useRef } from "react";
import SectionTitile from "../SectionTitle";
import SectionContent from "../SectionContent";

interface Props {
  title?: string;
  children?: ReactNode;
  id: string;
}

const Section: FC<Props> = ({ title, children, id }) => {
  return (
    <section className="h-[700px]" id={id}>
      {title && <SectionTitile title={title} />}
      <SectionContent>{children}</SectionContent>
    </section>
  );
};

export default Section;
