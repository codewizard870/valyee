import Card from "./card";

const Top = () => {
  return (
    <div className="pt-16 md:pt-[100px] pb-24 md:pb-[158px] mx-6 md:mx-[118px] flex justify-end">
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
        <div className="mt-20 md:mt-[122px] flex flex-col md:flex-row gap-[30px]">
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
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. ",
  },
  {
    title: "Apply Custom Screening Criteria",
    label:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. ",
  },
];
