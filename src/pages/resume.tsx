import DecoratedHeader from "../components/decoratedHeader";
import ExperienceSection from "../components/ExperienceSection";
import ReactIcon from "../svgs/reactIcon";
import React from "react";
import JavascriptIcon from "../svgs/javascriptIcon";
import HtmlIcon from "../svgs/htmlIcon";
import CssIcon from "../svgs/cssIcon";
import TypescriptIcon from "../svgs/typescriptIcon";
import TailwindIcon from "../svgs/tailwindIcon";
import ReduxIcon from "../svgs/reduxIcon";
import GitIcon from "../svgs/gitIcon";
import { motion, stagger } from "framer-motion";
import NextJsIcon from "../svgs/nextIcon";
import { BootstrapIcon } from "../svgs/bootstrapIcon";
import NodeJsIcon from "../svgs/nodeIcon";
import MongoDBIcon from "../svgs/mongoDbIcon";
import ExpressJsIcon from "../svgs/expressIcon";

const Resume = () => {
  const experiences = [
    {
      companyName: "PuroCoach",
      companyLogo: "https://www.purocoach.com/PUROCoach-Logo.svg",
      positions: [
        {
          title: "Next.Js Developer",
          date: "Mar 2026 - present",
          description:
            "As a Frontend Developer at PuroCoach, I contribute to developing and enhancing a modern SaaS platform by building responsive and user-friendly web applications using Next.js, React.js, TypeScript, and Tailwind CSS. My work focuses on creating reusable UI components, implementing role-based dashboards, and developing features that support scheduling, booking, and business workflows. I collaborate closely with designers and backend developers to deliver scalable solutions while optimizing performance and maintaining clean, maintainable code to ensure a seamless user experience.",
        },
      ],
    },
    {
      companyName: "HurTech",
      companyLogo:
        "https://media.licdn.com/dms/image/v2/D4D0BAQFH703r-CXyeQ/company-logo_200_200/B4DZoGp2nyJIAI-/0/1761048228314/hurtechllc_logo?e=1784160000&v=beta&t=S8VT1hQWGeNf7OWidVvVwZmw7UFc2231OZ1u_KZIgkI",
      positions: [
        {
          title: "React Developer",
          date: "May 2025 - Mar 2026",
          description:
            "As a React Developer at Hur Tech, I contributed to building and optimizing dynamic, user-friendly web applications using modern front-end technologies. My work focused on developing responsive interfaces, integrating APIs, and improving performance to ensure smooth user experiences. I collaborated closely with designers and backend engineers to deliver scalable and maintainable solutions aligned with business goals.",
        },
        {
          title: "Frontend Intern",
          date: "Nov 2024 – May 2025",
          description:
            "During my internship at Hur Tech as a React Developer, I gained hands-on experience in building interactive and modern web applications using React.js and Tailwind CSS. I focused on creating clean, responsive, and user-centered designs while enhancing my understanding of front-end development and UI/UX principles. The internship provided valuable experience working on real-world projects, collaborating with team members, and applying best practices in modern web development. I have a solid foundation in HTML, CSS, JavaScript, and TypeScript, along with a passion for crafting seamless, visually appealing user experiences",
        },
      ],
    },
    {
      companyName: "Self",
      companyLogo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMXop0AIFEjQZiLEM2HnDOVLfTpDHi2dL_0A&s",
      positions: [
        {
          title: "Game Developer",
          date: "Feb 2024 - Sep 2024",
          description:
            "As a beginner, I spent around 8 months learning Unity and C#, gaining foundational exposure to game development concepts such as basic game design, prototyping, and simple gameplay mechanics. This learning phase strengthened my C# fundamentals, logical thinking, and problem-solving skills, which continue to positively influence my approach to development.",
        },
      ],
    },
  ];

  const Skill = ({
    language,
    icon,
  }: {
    language: string;
    icon: React.ReactNode;
  }) => (
    <div className="skill">
      <span>{language}</span>
      {icon}
      <p className="horizontal1"></p>
      <p className="horizontal2"></p>
    </div>
  );

  const mainDivAnimation = {
    hidden: {},
    visible: { transition: { delayChildren: stagger(0.4) } },
  };
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
    <div className="pt-14 pb-[70px] px-5">
      <DecoratedHeader heading="RESUME" subHeading="MY" text="RESUME" />
      <motion.div
        variants={mainDivAnimation}
        initial="hidden"
        whileInView="visible"
        className="max-w-[600px] m-auto mt-4"
      >
        <motion.h1
          variants={fadeIn}
          className="text-2xl my-2 font-bold bg-gradient-to-b bg-clip-text text-transparent from-[#6668eb] to-[#ecec56] w-fit"
        >
          Work Experience
        </motion.h1>
        <ExperienceSection experiences={experiences} />
        <motion.div variants={fadeIn}>
          <h1 className="text-2xl font-bold bg-gradient-to-b bg-clip-text text-transparent from-[#6668eb] to-[#ecec56] w-fit">
            Education
          </h1>
          <div>
            <div className="educationSection">
              <div className="flex items-center gap-3">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVW2bntLGGTvvZ2hZyU388KqM7-zGpvIiLqw&s"
                  alt=""
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <h1 className="text-lg font-semibold">
                    Virtual University of Pakistan
                  </h1>
                  <h1 className="text-sm font-[500]">BS(CS)</h1>
                </div>
              </div>
              <p className="text-[#666666] text-sm font-[500]">
                2025 - Present
              </p>
            </div>
            <div className="educationSection">
              <div className="flex items-center gap-3">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvp63gBBgVkmkxgIeqXeBClN0RthCSIqGNMg&s"
                  alt=""
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <h1 className="text-lg font-semibold">
                    National College of E-Commerce
                  </h1>
                  <h1 className="text-sm font-[500]">I.C.S</h1>
                </div>
              </div>
              <p className="text-[#666666] text-sm font-[500]">2023 - 2025</p>
            </div>
          </div>
        </motion.div>
        <motion.div variants={fadeIn}>
          <h1 className="text-2xl font-bold bg-gradient-to-b bg-clip-text text-transparent from-[#6668eb] to-[#ecec56] w-fit">
            Skills
          </h1>
          <div className="mt-5 px-5 flex flex-wrap justify-center gap-4">
            <Skill
              language="React"
              icon={<ReactIcon width={60} height={60} />}
            />
            <Skill
              language="NextJs"
              icon={<NextJsIcon size={50} />}
            />
            <Skill language="NodeJs" icon={<NodeJsIcon size={50} />} />
            <Skill
              language="HTML5"
              icon={<HtmlIcon width={60} height={60} />}
            />
            <Skill language="Css" icon={<CssIcon width={60} height={60} />} />
            <Skill
              language="TypeScript"
              icon={<TypescriptIcon width={50} height={50} />}
            />
            <Skill
              language="JavaScript"
              icon={<JavascriptIcon width={50} height={50} />}
            />
            <Skill language="ExpressJs" icon={<ExpressJsIcon size={50} />} />
            <Skill language="MongoDB" icon={<MongoDBIcon size={50} />} />

            <Skill
              language="Tailwind"
              icon={<TailwindIcon width={50} height={50} />}
            />
            <Skill
              language="Bootstrap"
              icon={<BootstrapIcon width={50} height={50} />}
            />
            <Skill
              language="Redux"
              icon={<ReduxIcon width={50} height={50} />}
            />
            <Skill language="Git" icon={<GitIcon width={50} height={50} />} />

          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Resume;
