import React from "react";

type sectionTypes = {
  title: string;
  subTitle: string;
  text?: string;
  onContact?: boolean;
  children?: React.ReactNode;
};

const SectionItem = ({
  title,
  subTitle,
  text,
  onContact = false,
  children,
}: sectionTypes) => (
  <div>
    <h6 className="bg-black text-white font-[500] rounded-md p-3 py-1 w-fit text-sm m-auto dark:bg-white dark:text-black">
      {title}
    </h6>
    <h1 className="text-3xl font-bold text-center text-primaryText mt-3 md:text-5xl">
      {subTitle}
    </h1>
    <h3 className="text-xl font-semibold text-center mt-3 text-[#8c8c8d]">
      {onContact ? children : text}
    </h3>
  </div>
);

export default SectionItem;
