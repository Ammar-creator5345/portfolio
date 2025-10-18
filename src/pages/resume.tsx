import DecoratedHeader from "../components/decoratedHeader";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import ReactIcon from "../svgs/reactIcon";
import React from "react";
import JavascriptIcon from "../svgs/javascriptIcon";
import HtmlIcon from "../svgs/htmlIcon";
import CssIcon from "../svgs/cssIcon";
import TypescriptIcon from "../svgs/typescriptIcon";
import TailwindIcon from "../svgs/tailwindIcon";
import ReduxIcon from "../svgs/reduxIcon";
import GitIcon from "../svgs/gitIcon";

const Resume = () => {
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
  return (
    <div className="pt-12 pb-[70px] px-5">
      <DecoratedHeader heading="RESUME" subHeading="MY" text="RESUME" />
      <div className="max-w-[600px] m-auto mt-4">
        <h1 className="text-2xl my-2 font-bold bg-gradient-to-b bg-clip-text text-transparent from-[#6668eb] to-[#ecec56] w-fit">
          Work Experience
        </h1>
        <div className="px-2">
          <div className="text-white flex flex-col gap-2 p-3 sm:flex-row sm:gap-6">
            <div className="w-[50px] h-[50px] min-w-[50px] min-h-[50px] rounded-full overflow-hidden">
              <img
                src="https://media.licdn.com/dms/image/v2/D4D0BAQEGqwOa_CH_pA/company-logo_200_200/B4DZgxRdryHsAI-/0/1753173319177/hurtechsolutions_logo?e=1763596800&v=beta&t=kUro1Mfo-Fowyh01IuItE_DYggWxA7_o3ld7HpCEqfc"
                alt=""
                className="w-full aspect-square"
              />
            </div>
            <div>
              <h1 className="text-2xl font-semibold">HurTech</h1>
              <div>
                <div className="flex items-center gap-2">
                  <FiberManualRecordIcon
                    sx={{ fontSize: "18px", color: "#898282" }}
                  />
                  <span className="text-lg font-semibold">React Developer</span>
                </div>
                <div className="px-4 ml-2 mt-1 border-l-2 border-l-[#9e9797]">
                  <p className="text-sm text-[#898282] font-[500]">
                    July 2025 - Oct 2025
                  </p>
                  <p className="text-[13px] pb-2 font-[500]">
                    As a React Developer at Hur Tech, I contributed to building
                    and optimizing dynamic, user-friendly web applications using
                    modern front-end technologies. My work focused on developing
                    responsive interfaces, integrating APIs, and improving
                    performance to ensure smooth user experiences. I
                    collaborated closely with designers and backend engineers to
                    deliver scalable and maintainable solutions aligned with
                    business goals.
                  </p>
                </div>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <FiberManualRecordIcon
                    sx={{ fontSize: "18px", color: "#898282" }}
                  />
                  <span className="text-lg font-semibold">Frontend Intern</span>
                </div>
                <div className="px-4 ml-2 mt-1 border-l-2 border-l-[#9e9797]">
                  <p className="text-sm text-[#898282] font-[500]">
                    Jan 2025 - June 2025
                  </p>
                  <p className="text-[13px] font-[500]">
                    During my internship at Hur Tech as a React Developer, I
                    gained hands-on experience in building interactive and
                    modern web applications using React.js and Tailwind CSS. I
                    focused on creating clean, responsive, and user-centered
                    designs while enhancing my understanding of front-end
                    development and UI/UX principles. The internship provided
                    valuable experience working on real-world projects,
                    collaborating with team members, and applying best practices
                    in modern web development. I have a solid foundation in
                    HTML, CSS, JavaScript, and TypeScript, along with a passion
                    for crafting seamless, visually appealing user experiences
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="text-white flex flex-col gap-2 p-3 sm:flex-row sm:gap-6">
            <div className="w-[50px] h-[50px] min-w-[50px] min-h-[50px] rounded-full overflow-hidden">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMXop0AIFEjQZiLEM2HnDOVLfTpDHi2dL_0A&s"
                alt=""
                className="w-full aspect-square"
              />
            </div>
            <div>
              <h1 className="text-2xl font-semibold">Self</h1>
              <div>
                <div className="flex items-center gap-2">
                  <FiberManualRecordIcon
                    sx={{ fontSize: "18px", color: "#898282" }}
                  />
                  <span className="text-lg font-semibold">Game Developer</span>
                </div>
                <div className="px-4 ml-2 mt-1 border-l-2 border-l-[#9e9797]">
                  <p className="text-sm text-[#898282] font-[500]">
                    Oct 2023 - Sep 2024
                  </p>
                  <p className="text-[13px] pb-2 font-[500]">
                    As a passionate game developer, I have one year of hands-on
                    experience in Unity, where I worked on different stages of
                    game development such as design, prototyping, programming
                    gameplay mechanics, and optimizing performance. My
                    experience gave me a solid foundation in C# programming and
                    the ability to implement features, solve technical
                    challenges, and collaborate with designers and artists to
                    bring creative ideas to life. While I’ve now moved on from
                    Unity, the skills and knowledge I gained continue to shape
                    the way I approach problem-solving and development, and I’m
                    excited to apply them as I grow in the tech industry.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
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
        </div>
        <div>
          <h1 className="text-2xl font-bold bg-gradient-to-b bg-clip-text text-transparent from-[#6668eb] to-[#ecec56] w-fit">
            Skills
          </h1>
          <div className="mt-5 px-5 flex flex-wrap justify-center gap-4">
            <Skill
              language="React"
              icon={<ReactIcon width={60} height={60} />}
            />
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
            <Skill
              language="Tailwind"
              icon={<TailwindIcon width={50} height={50} />}
            />
            <Skill
              language="Redux"
              icon={<ReduxIcon width={50} height={50} />}
            />
            <Skill language="Git" icon={<GitIcon width={50} height={50} />} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
