import Resume from "./resume";

const Multiple = () => {
  return (
    <div className="pt-[10px] md:pt-[100px] pb-0 md:pb-[158px] mx-6 md:mx-[118px] flex flex-col lg:flex-row gap-10 justify-between items-center">
      <div>
        <p className="text-3xl font-medium !leading-normal text-center md:text-4xl font-Roboto lg:text-left">
          Source and manage candidates across multiple job boards!
        </p>
        <p className="mt-6 text-sm md:text-base font-Roboto text-[#6F7CB2] text-center lg:text-left max-w-[512px]">
          Aggregate, compare, filter and shortlist candidates sourced from
          across multiple job boards - including LinkedIn, AngelList, Indeed and
          Naukri.com.
        </p>
        <div className="mt-10 md:mt-[122px] grid grid-cols-1 lg:grid-cols-2 md:flex-row gap-[30px]">
          {Resumes.map((resume, index) => (
            <Resume data={resume} key={index} />
          ))}
        </div>
      </div>
      <div className="relative flex max-w-[300px] lg:min-w-[500px] justify-center">
        <div
          className="absolute w-full h-full"
          style={{
            background:
              "linear-gradient(98.24deg, rgba(109, 220, 255, 0.35) 0%, rgba(127, 96, 249, 0.35) 100%)",
            filter: "blur(105px)",
            transform: "matrix(-0.4, -0.92, 0.94, -0.35, 0, 0)",
          }}
        ></div>
        <img src="/assets/multiple/banner.png" className="rounded-lg" />
      </div>
    </div>
  );
};

export default Multiple;

const Resumes = [
  {
    title: "Bulk Download Resumes",
    label:
      "Downloading resumes manually is exhausting. We offer a 1 click solution to download and rank all applicants, instantly!",
    icon: "/assets/multiple/1.png",
  },
  {
    title: "Consolidate Candidate Management",
    label:
      "Stop wasting time managing applicants on different job portals. Access, rank and manage all candidates from a single dashboard.",
    icon: "/assets/multiple/2.png",
  },
];
