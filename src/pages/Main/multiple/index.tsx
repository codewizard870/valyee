import Resume from "./resume";

const Multiple = () => {
  return (
    <div className="pt-[100px] pb-[158px] mx-[118px]">
      <p className="text-4xl font-medium leading-normal font-Roboto">
        Source and manage candidates
        <br /> across multiple job boards!
      </p>
      <p className="mt-6 text-base font-Roboto text-[#6F7CB2]">
        Aggregate, compare, filter and shortlist candidates sourced from across
        <br /> multiple job boards - including LinkedIn, AngelList, Indeed and
        <br /> Naukri.com.{" "}
      </p>
      <div className="mt-[122px] flex gap-[30px]">
        {Resumes.map((resume, index) => (
          <Resume data={resume} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Multiple;

const Resumes = [
  {
    title: "Bulk Download Resumes",
    label:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. ",
  },
  {
    title: "Consolidate Candidate Management",
    label:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. ",
  },
];
