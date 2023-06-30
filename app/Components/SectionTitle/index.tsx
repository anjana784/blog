import { FC } from "react";

interface Props {
  title: string;
}

const SectionTitile: FC<Props> = ({ title }) => {
  return (
    <h1 className="text-center text-primaryGold text-4xl max-lg:text-3xl py-6 max-lg:py-4 max-md:text-2xl max-md:py-2">
      {title}
    </h1>
  );
};

export default SectionTitile;
