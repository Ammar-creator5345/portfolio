import React from "react";

type propsTypes = {
  heading: string;
  subHeading: string;
  text: string;
};

const DecoratedHeader: React.FC<propsTypes> = ({
  heading,
  subHeading,
  text,
}) => {
  return (
    <div className="flex items-center justify-center">
      <div className="relative w-fit">
        <h1 className="text-6xl text-[#0E0F0F] font-bold tracking-[5px] md:text-8xl">
          {heading}
        </h1>
        <h1 className="text-[35px] text-[#4A4A4A] whitespace-nowrap font-semibold absolute top-[55%] -translate-y-1/2  -translate-x-1/2 left-1/2 md:text-[50px]">
          {subHeading} <b className="text-[orange]">{text}</b>
        </h1>
      </div>
    </div>
  );
};

export default DecoratedHeader;
