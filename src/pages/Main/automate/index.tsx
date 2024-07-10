import Card from "./card";

const Automate = () => {
  return (
    <div className="pt-[100px] pb-[158px] mx-[118px]">
      <p className="text-4xl font-medium leading-normal font-Roboto">
        Automate Early Stage Interviews
      </p>
      <p className="mt-6 text-base font-Roboto text-[#6F7CB2]">
        Ler your HR team focus on hiring, not scheduling and information
        <br /> gathering. Gather information, schedule & conduct interviews,
        create
        <br /> assessments and get data driven insights to drive hiring
        decisions -<br /> without wasting a single minute of recruiter time.
      </p>
      <div className="mt-[122px] flex gap-[30px]">
        {Cards.map((resume, index) => (
          <Card data={resume} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Automate;

const Cards = [
  {
    title: "Create Interviews & Assessments",
    label:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. ",
  },
  {
    title: "AI Interviews & Insights",
    label:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. ",
  },
];
