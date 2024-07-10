import Card from "./card";

const Top = () => {
  return (
    <div className="pt-[100px] pb-[158px] mx-[118px] flex justify-end">
      <div>
        <p className="text-4xl font-medium leading-normal font-Roboto">
          Screen & Filter Top Candidates
        </p>
        <p className="mt-6 text-base font-Roboto text-[#6F7CB2]">
          Stop spending hours reviewing CVs. Our proprietary tech extracts and
          <br /> compares experience, skills, projects and education across
          multiple
          <br /> candidates to find you the best candidates, quickly.
        </p>
        <div className="mt-[122px] flex gap-[30px]">
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
