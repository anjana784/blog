import { FC } from "react";

interface Props {
  title: string;
}

const SectionTitile: FC<Props> = ({ title }) => {
  return (
    <h1 className="text-center text-primaryGold text-4xl py-6">{title}</h1>
  );
};

export default SectionTitile;
