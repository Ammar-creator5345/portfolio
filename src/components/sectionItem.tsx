import React from "react";

type sectionTypes = {
  title: string,
  subTitle: string,
  text?: string,
  onContact?: boolean,
  children?: React.ReactNode
};

const SectionItem = ({ title, subTitle, text, onContact = false, children }: sectionTypes) => (
  <div>
    <h6 className="bg-white rounded-md p-3 py-1 w-fit text-sm m-auto">
      {title}
    </h6>
    <h1 className="text-4xl font-semibold text-center text-white mt-3">
      {subTitle}
    </h1>
    <h3 className="text-xl font-semibold text-center mt-3 text-[#8c8c8d]">
      {onContact ? children : text}
    </h3>
  </div>
);


export default SectionItem