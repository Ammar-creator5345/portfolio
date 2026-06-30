import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { motion } from "framer-motion";

type ExperiencePosition = {
  title: string;
  date: string;
  description: string;
};

type ExperienceCompany = {
  companyName: string;
  companyLogo: string;
  positions: ExperiencePosition[];
};

type ExperienceSectionProps = {
  experiences: ExperienceCompany[];
};

const ExperienceSection = ({ experiences }: ExperienceSectionProps) => {
  const fadeIn = {
    hidden: { opacity: 0, y: 12, filter: "blur(5px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.6 },
    },
  };

  return (
    <motion.div variants={fadeIn} className="px-2">
      {experiences.map((experience, experienceIndex) => (
        <div
          key={`${experience.companyName}-${experienceIndex}`}
          className="text-white flex flex-col gap-2 p-3 sm:flex-row sm:gap-6"
        >
          <div className="w-[50px] h-[50px] min-w-[50px] min-h-[50px] rounded-full border dark:border dark:border-[#2c2b2b] overflow-hidden">
            <img
              src={experience.companyLogo}
              alt={`${experience.companyName} logo`}
              className="w-full aspect-square"
            />
          </div>
          <div className="w-full">
            <h1 className="text-2xl text-black dark:text-white font-semibold">
              {experience.companyName}
            </h1>
            {experience.positions.map((position, positionIndex) => (
              <div key={`${position.title}-${positionIndex}`}>
                <div className="flex items-center gap-2">
                  <FiberManualRecordIcon
                    sx={{ fontSize: "18px", color: "#898282" }}
                  />
                  <span className="text-lg text-black dark:text-white font-semibold">
                    {position.title}
                  </span>
                </div>
                <div className="px-4 ml-2 mt-1 border-l-2 border-l-[#9e9797]">
                  <p className="text-sm text-[#898282] font-[500]">{position.date}</p>
                  <p className="text-[13px] pb-2 font-[500] text-black dark:text-white">
                    {position.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </motion.div>
  );
};

export default ExperienceSection;
