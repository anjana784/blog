import { FC, ReactNode } from "react";
import SectionTitile from "../SectionTitle";

interface Props {
  title?: string;
  children?: ReactNode;
}

const Section: FC<Props> = ({ title, children }) => {
  return (
    <section className="h-[700px]">
      {title && <SectionTitile title={title} />}
      {children}
    </section>
  );
};

export default Section;
