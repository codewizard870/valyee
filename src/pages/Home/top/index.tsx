import Card from "./card";

const Top = () => {
  return (
    <div className="pt-16 md:pt-[100px] pb-24 md:pb-[158px] mx-6 md:mx-[118px] flex flex-col-reverse lg:flex-row gap-10 justify-between items-center">
      <div className="max-w-[300px] lg:max-w-[400px]">
        <img
          src="/assets/top/banner.png"
          className="rounded-lg"
        />
      </div>
      <div>
        <p className="text-3xl font-medium leading-normal text-center md:text-4xl font-Roboto lg:text-left">
          Screen & Filter Top Candidates
        </p>
        <p className="mt-6 text-sm md:text-base font-Roboto text-[#6F7CB2] text-center lg:text-left lg:max-w-[512px]">
          Stop spending hours reviewing CVs. Our proprietary tech extracts and
          compares experience, skills, projects and education across
          multiple
          candidates to find you the best candidates, quickly.
        </p>
        <div className="mt-10 md:mt-[122px] flex flex-col md:flex-row gap-[30px]">
          {Cards.map((resume, index) => (
            <Card data={resume} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Top;

const Cards = [
  {
    title: "Find the Best Fit, Instantly.",
    label:
      "Use our proprietary AI algorithms to analyse candidates resumes, portfolios & projects to find the perfect candidate for the role.",
    icon: "/assets/top/1.png",
  },
  {
    title: "Apply Custom Screening Criteria",
    label:
      "There’s no one size fits all approach when it comes to hiring. Our platform allows you to customise how your candidates are shortlisted.",
    icon: "/assets/top/2.png",
  },
];
