import { FC, ReactNode } from "react";
import SectionTitile from "../SectionTitle";
import SectionContent from "../SectionContent";

interface Props {
  title?: string;
  children?: ReactNode;
}

const Section: FC<Props> = ({ title, children }) => {
  return (
    <section className="h-[700px]">
      {title && <SectionTitile title={title} />}
      <SectionContent>{children}</SectionContent>
    </section>
  );
};

export default Section;
