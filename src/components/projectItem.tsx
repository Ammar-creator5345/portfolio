import Globe1 from "../svgs/globeIcon1";

type propsTypes = {
  title: string;
  date: string;
  text: string;
  languages: string[];
  image: string;
  link: string;
};
const ProjectItem = ({
  title,
  date,
  text,
  languages,
  image,
  link,
}: propsTypes) => {
  return (
    <div className="w-full dark:shadow-[1px_1px_10px_#2d2b2b] rounded-xl overflow-hidden border border-[#dfdcdc] dark:border-[#333333] flex flex-col p-2 sm:w-1/2 sm:justify-between sm:min-h-[425px] transition-all duration-200 hover:shadow-[1px_1px_6px_gray]">
      <div>
        <img src={image} alt="" />
        <div className="text-primaryText">
          <h1 className="text-lg font-semibold">{title}</h1>
          <p className="text-sm">{date}</p>
          <p className="text-[13px] font-[500] text-[#575757] dark:text-[#9e9e9e] mt-1">
            {text}
          </p>
        </div>
      </div>
      <div>
        <div className="flex gap-1 items-center text-primaryText">
          {languages.map((value: string, index: number) => (
            <span
              key={index}
              className="bg-[#e7e6e6] dark:bg-[#252525] p-2 py-[2px] rounded-lg text-[12px] font-[500]"
            >
              {value}
            </span>
          ))}
        </div>
        <div className="mt-3">
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className="flex items-center w-fit gap-1 bg-black dark:bg-white py-[2px] px-2 rounded-md"
          >
            <Globe1 className="text-white dark:text-black text-[13px]" />
            <span className="text-[12px] text-white dark:text-black">
              Website
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
