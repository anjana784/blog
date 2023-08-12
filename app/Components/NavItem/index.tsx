import useStore from "@/app/Store";
import Link from "next/link";
import { FC } from "react";

interface Props {
  currentSectionName: string;
  item: string;
  className?: string;
}

const NavItem: FC<Props> = ({ currentSectionName, item, className }) => {
  const sections = useStore((state) => state.sections);

  const clickHandler = () => {
    console.log("clicked");
  };

  return (
    <Link
      href={`#${item}`}
      className="flex justify-center items-center h-full capitalize"
      onClick={clickHandler}
    >
      <p
        className={`text-primaryWhite ${className} w-full  ${
          currentSectionName === item
            ? " border-b-solid border-b-[2px] 2xl:border-b-[2px] xl:border-b-[2px] md:border-b-[2px] sm:border-b-[1px] xsm:border-b-[1px] border-b-primaryGold"
            : null
        }`}
      >
        {/* <span className="text-primaryGold">#/</span> */}
        {item}
      </p>
    </Link>
  );
};

export default NavItem;
