import useStore from "@/app/Store";
import Link from "next/link";
import { FC } from "react";

interface Props {
  currentSectionName: string;
  item: string;
}

const NavItem: FC<Props> = ({ currentSectionName, item }) => {
  const sections = useStore((state) => state.sections);

  const clickHandler = () => {
    console.log("clicked");
  };

  return (
    <Link
      href={`#${item}`}
      className="flex justify-center items-center mr-6 h-full"
      onClick={clickHandler}
    >
      <p
        className={`text-primaryWhite text-xl w-full capitalize ${
          currentSectionName === item
            ? " border-b-solid border-b-[2px] border-b-primaryGold"
            : null
        }`}
      >
        {item}
      </p>
    </Link>
  );
};

export default NavItem;
