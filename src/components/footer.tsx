import GithubIcon from "../svgs/githubIcon";
import { LinkedinIcon } from "../svgs/linkedinIcon";
import { NightIcon } from "../svgs/nightModeIcon";

const Footer = () => {
  return (
    <div className="text-white fixed z-[1000] shadow-[1px_1px_6px_#1e1e21] -translate-x-1/2 duration-300 bottom-3 left-1/2 backdrop-blur-xl bg-black/10 ease-in-out flex justify-between items-center w-[130px] p-1 px-2 rounded-full border border-white/20 transition-all hover:w-[160px] hover:py-[6px]">
      <a href="https://github.com/Ammar-creator5345/" target="_blank" className="rounded-full p-2 flex items-center justify-center hover:bg-[#361212]">
        <GithubIcon width={23} height={23} />
      </a>
      <a href="https://www.linkedin.com/in/muhammad-ammar-8486912a3/" target="_blank" className="rounded-full p-2 flex items-center justify-center hover:bg-[#361212]">
        <LinkedinIcon width={23} height={23} />
      </a>
      <button className="divide-y rounded-full p-2 flex items-center justify-center hover:bg-[#361212]">
        <NightIcon width={23} height={23} />
      </button>
    </div>
  );
};

export default Footer;
