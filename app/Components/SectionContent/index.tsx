import { FC, ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

const SectionContent: FC<Props> = ({ children }) => {
  return <div>{children}</div>;
};

export default SectionContent;
