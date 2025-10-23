import React from "react";
import { motion } from "framer-motion";

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
    <motion.div
      initial={{ opacity: 0, filter: "blur(7px)" }}
      whileInView={{
        opacity: 1,
        filter: "blur(0px)",
        transition: { duration: 0.6 },
      }}
      viewport={{ once: true }}
      className="flex items-center justify-center"
    >
      <div className="relative w-fit">
        <h1 className="text-6xl text-[#F2F2F2] dark:text-[#0E0F0F] font-bold tracking-[5px] md:text-8xl">
          {heading}
        </h1>
        <h1 className="text-[35px] text-[#4A4A4A] whitespace-nowrap font-semibold absolute top-[55%] -translate-y-1/2  -translate-x-1/2 left-1/2 md:text-[50px]">
          {subHeading} <b className="text-[orange]">{text}</b>
        </h1>
      </div>
    </motion.div>
  );
};

export default DecoratedHeader;
