import useStore from "@/app/Store";
import Link from "next/link";
import { FC } from "react";

interface Props {
  currentSectionName: string;
  item: string;
  className?: string;
}

const NavItem: FC<Props> = ({ currentSectionName, item, className }) => {
  const handleNavigate = (section: string) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <div
      className={`cursor-pointer flex justify-center items-center h-full capitalize px-4 2xl:px-4 xl:px-4 md:px-4 sm:px-3 xsm:px-2 ${
        currentSectionName === item
          ? " border-b-solid border-b-[2px] 2xl:border-b-[2px] xl:border-b-[2px] md:border-b-[2px] sm:border-b-[1px] xsm:border-b-[1px] border-b-primaryGold"
          : null
      }`}
      onClick={() => handleNavigate(item)}
    >
      <p className={`text-primaryWhite ${className} w-full `}>{item}</p>
    </div>
  );
};

export default NavItem;
