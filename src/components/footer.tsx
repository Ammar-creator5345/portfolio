import { useEffect } from "react";
import { useTheme } from "../context/theme";
import GithubIcon from "../svgs/githubIcon";
import { LinkedinIcon } from "../svgs/linkedinIcon";
import { NightIcon } from "../svgs/nightModeIcon";
import { LightIcon } from "../svgs/lightIcon";

const Footer = () => {
  const { theme, toggleTheme } = useTheme();
  useEffect(() => console.log(theme), [theme]);
  return (
    <div className="text-white fixed z-[1000] shadow-[1px_1px_6px_#8e8080] dark:shadow-[1px_1px_6px_#1e1e21] -translate-x-1/2 duration-300 bottom-3 left-1/2 backdrop-blur-lg bg-black/10 ease-in-out flex justify-between items-center w-[130px] p-1 px-2 rounded-full border border-white/20 transition-all hover:w-[160px] hover:py-[6px]">
      <a
        href="https://github.com/Ammar-creator5345/"
        target="_blank"
        className="rounded-full p-2 flex items-center justify-center hover:bg-[#cac5c5] dark:hover:bg-[#361212]"
      >
        <GithubIcon
          color={theme === "light" ? "black" : ""}
          width={23}
          height={23}
        />
      </a>
      <a
        href="https://www.linkedin.com/in/muhammad-ammar-8486912a3/"
        target="_blank"
        className="rounded-full p-2 flex items-center justify-center hover:bg-[#cac5c5] dark:hover:bg-[#361212]"
      >
        <LinkedinIcon
          color={theme === "light" ? "black" : ""}
          width={23}
          height={23}
        />
      </a>
      <button
        onClick={toggleTheme}
        className="divide-y rounded-full p-2 flex items-center justify-center hover:bg-[#cac5c5] dark:hover:bg-[#361212]"
      >
        {theme === "dark" ? (
          <NightIcon width={23} height={23} />
        ) : (
          <LightIcon color="black" width={20} height={20} />
        )}
      </button>
    </div>
  );
};

export default Footer;
