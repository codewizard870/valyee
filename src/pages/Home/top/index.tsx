import Card from "./card";

const Top = () => {
  return (
    <div className="pt-16 md:pt-[100px] pb-24 md:pb-[158px] mx-6 md:mx-[118px] flex flex-col-reverse md:flex-row gap-10 md:gap-0 justify-between">
      <div>
        <img
          src="/assets/top/banner.png"
          className="w-full md:w-[400px] rounded-lg"
        />
      </div>
      <div>
        <p className="text-3xl font-medium leading-normal md:text-4xl font-Roboto">
          Screen & Filter Top Candidates
        </p>
        <p className="mt-6 text-sm md:text-base font-Roboto text-[#6F7CB2]">
          Stop spending hours reviewing CVs. Our proprietary tech extracts and
          <br /> compares experience, skills, projects and education across
          multiple
          <br /> candidates to find you the best candidates, quickly.
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
