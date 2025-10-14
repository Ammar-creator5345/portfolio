import Globe1 from "../svgs/globeIcon1"

type propsTypes = {
    title: string,
    date: string,
    text: string,
    languages: string[]
}
const ProjectItem = ({ title, date, text, languages }: propsTypes) => {
    return (
        <div className="w-[350px] rounded-xl overflow-hidden border border-[#333333]">
            <img src="https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg?semt=ais_hybrid&w=740&q=80" alt="" />
            <div className="p-2 text-white">
                <h1 className="text-lg font-semibold">{title}</h1>
                <p className="text-sm">{date}</p>
                <p className="text-[13px] font-[500] text-[#8c8c8d] mt-1">{text}</p>
                <div className="mt-2 flex gap-1 items-center">
                    {languages.map((value: string, index: number) => (
                        <span
                            key={index}
                            className="bg-[#202020] p-2 py-[2px] rounded-lg text-[12px] font-[500]"
                        >
                            {value}
                        </span>
                    ))}
                </div>
                <div className="mt-3">
                    <button className="flex items-center gap-1 bg-white py-[2px] px-2 rounded-md">
                        <Globe1 className="text-black" />
                        <span className="text-[12px] text-black">Website</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ProjectItem