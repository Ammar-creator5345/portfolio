import ProjectItem from "../components/projectItem";
import SectionItem from "../components/sectionItem";

const Home = () => {
  return (
    <div className="bg-[#000000] p-4 py-10 pb-[65px]">
      <div className="max-w-[650px] m-auto">
        <div className="flex justify-between text-white items-center gap-10">
          <div className="flex flex-col flex-1">
            <h1 className="text-2xl font-semibold mt-5 md:text-5xl md:mt-0">
              Hi, I'm Ammar
            </h1>
            <h3 className="text-lg font-semibold mt-9 md:text-2xl">
              Passionate React.js Developer focused on creating intuitive user
              experiences
            </h3>
          </div>
          <div className="rounded-lg w-full max-w-[250px] aspect-square sm:max-w-[220px] md:max-w-[250px]">
            <img
              src="/photo.png"
              alt="profilePic"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
        <div className="mt-20 text-white">
          <h3 className="text-2xl font-semibold">About</h3>
          <p className="text-sm font-[500] text-[#8c8c8d]">
            As a passionate React.js Developer with around one year of
            experience, I build responsive and user-focused web applications
            using JavaScript, TypeScript, HTML, CSS, Tailwind CSS, and Git. I’m
            committed to writing clean, efficient code and continuously
            improving my skills to deliver smooth, high-quality user
            experiences. Additionally, I also have experience in Game
            Development using Unity and C#.
          </p>
        </div>
        <div className="mt-12">
          <div>
            <SectionItem
              title="My Projects"
              subTitle="Check out my latest work"
              text="I've worked on a variety of projects, from simple websites to
              complex web applications. Here are a few of my favorites."
            />
          </div>
          <div className="flex flex-col gap-4 items-center justify-center mt-12 sm:flex-row">
            <ProjectItem
              title="GrowHire"
              date="Aug 2025 - Oct 2025"
              text="I developed a responsive platform for job seekers where users can 
               build their resumes, chat with an AI-powered assistant, search and track
               jobs, view job details, manage subscriptions, and adjust their settings.
               I built it using React.js and Tailwind CSS, focusing on a clean and
               interactive design that makes the whole experience smooth and user-friendly"
              languages={["React.js", "JavaScript", "Tailwind"]}
              image="./growhirePhoto.png"
              link="https://grow-hire.vercel.app/"
            />
            <ProjectItem
              title="MovieVerse"
              date="june 2025 - july 2025"
              text="I developed a movie search app with API integration to fetch and
               display movie details. Implemented cast details with clickable
               links to show related movies. Focused on responsive design and
               smooth navigation.I built it with React.js and pure Css to enhance my skills"
              languages={["React.js", "JavaScript", "Css"]}
              image="/movieversePhoto.png"
              link="https://movie-verse-dun.vercel.app/"
            />
          </div>
        </div>
        <div className="mt-12 px-10">
          <SectionItem title="Contact" subTitle="Get in Touch" onContact={true}>
            <div>
              Want to chat? Just shoot me a dm{" "}
              <a
                href="mailto:ammarsaleem5345@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                with a direct question on Email
              </a>{" "}
              and I'll respond whenever I can. I will ignore all soliciting.
            </div>
          </SectionItem>
        </div>
      </div>
    </div>
  );
};

export default Home;
