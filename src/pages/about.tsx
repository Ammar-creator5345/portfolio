import DecoratedHeader from "../components/decoratedHeader";
import { motion, stagger } from "framer-motion";

interface funcTypes {
  title: string;
  subTitle: string;
}
const About = () => {
  const InputItem = ({ title, subTitle }: funcTypes) => (
    <div className="flex items-center gap-1 mt-1">
      <span className="text-[#666666] font-semibold">{title}:</span>
      <span className="font-[500] text-black dark:text-white">{subTitle}</span>
    </div>
  );
  const SectionItem = ({
    title,
    subTitle,
  }: {
    title: string;
    subTitle: string;
  }) => (
    <div className="border border-[#b6b4b4] dark:border-white/40 dark:shadow-[1px_1px_6px_#282626] rounded-lg text-white p-5 w-[190px] h-[160px]">
      <h1 className="text-4xl font-bold text-[orange]">{title}</h1>
      <div className="flex gap-3 pr-4 mt-2">
        <p className="w-9 h-[1px] mt-3 bg-[#aca9a9]"></p>
        <span className="text-[#aca9a9] font-[500]">{subTitle}</span>
      </div>
    </div>
  );
  const fadeIn = {
    hidden: { opacity: 0, y: 12 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };
  const mainDiv = {
    hidden: {},
    visible: { transition: { delayChildren: stagger(0.4) } },
  };
  return (
    <div className="pt-[40px] pb-[65px] px-10 md:px-16">
      <div>
        <DecoratedHeader heading="PROFILE" subHeading="ABOUT" text="ME" />
        <motion.div
          variants={mainDiv}
          initial="hidden"
          whileInView="visible"
          className="px-6 flex flex-col mt-3 gap-12 min-[850px]:flex-row"
        >
          <motion.div variants={fadeIn} className="text-white">
            <h1 className="text-2xl font-bold bg-gradient-to-b bg-clip-text text-transparent from-[#6668eb] to-[#ecec56] w-fit">
              PERSONAL INFOS
            </h1>
            <div className="mt-3 flex flex-col md:flex-row md:gap-4">
              <div className="whitespace-nowrap">
                <InputItem title="First Name" subTitle="Muhammad Ammar" />
                <InputItem title="Age" subTitle="19 Years" />
                <InputItem title="Phone" subTitle="+92 3059047690" />
                <InputItem title="Address" subTitle="New Iqbal Park,Lahore" />
                <InputItem title="Languages" subTitle="Urdu,English" />
              </div>
              <div>
                <InputItem title="Nationality" subTitle="Pakistani" />
                <InputItem title="Email" subTitle="ammarsaleem5345@gmail.com" />
              </div>
            </div>
            <div className="mt-10">
              <a
                href="/resume.pdf"
                download="resume.pdf"
                target="_blank"
                className="rounded-full w-fit cursor-pointer flex items-center transition-all justify-center text-sm font-[500] py-2 px-3 bg-[orange] hover:bg-[#684407]"
              >
                DOWNLOAD RESUME
              </a>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn}
            className="flex items-center justify-center gap-4 flex-wrap md:justify-end"
          >
            <SectionItem title="1+" subTitle="Years of Experience" />
            <SectionItem title="5+" subTitle="Personal & Practice Projects" />
            <SectionItem title="∞" subTitle="Passion for Front-End Craft" />
            <SectionItem title="Always" subTitle="Eager to Collaborate" />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
