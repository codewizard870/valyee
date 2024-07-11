import Card from "./card";

const Automate = () => {
  return (
    <div className="pt-16 md:pt-[100px] pb-24 md:pb-[158px] mx-6 md:mx-[118px] flex flex-col md:flex-row gap-10 md:gap-0 justify-between items-center">
      <div>
        <p className="text-3xl font-medium leading-normal md:text-4xl font-Roboto">
          Automate Early Stage Interviews
        </p>
        <p className="mt-6 text-sm md:text-base font-Roboto text-[#6F7CB2]">
          Ler your HR team focus on hiring, not scheduling and information
          <br /> gathering. Gather information, schedule & conduct interviews,
          create
          <br /> assessments and get data driven insights to drive hiring
          decisions -<br /> without wasting a single minute of recruiter time.
        </p>
        <div className="mt-10 md:mt-[122px] flex flex-col md:flex-row gap-[30px]">
          {Cards.map((resume, index) => (
            <Card data={resume} key={index} />
          ))}
        </div>
      </div>
      <div>
        <img
          src="/assets/automate/banner.png"
          className="w-full md:w-[400px] rounded-lg"
        />
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
    icon: "/assets/automate/1.png"
  },
  {
    title: "AI Interviews & Insights",
    label:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. ",
      icon: "/assets/automate/2.png"
  },
];
