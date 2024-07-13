import Card from "./card";

const Automate = () => {
  return (
    <div className="pt-16 md:pt-[100px] pb-24 md:pb-[158px] mx-6 md:mx-[118px] flex flex-col lg:flex-row gap-10 justify-between items-center">
      <div>
        <p className="text-3xl font-medium leading-normal text-center md:text-4xl font-Roboto lg:text-left">
          Automate Early Stage Interviews
        </p>
        <p className="mt-6 text-sm md:text-base font-Roboto text-[#6F7CB2] lg:max-w-[512px] text-center lg:text-left">
          Ler your HR team focus on hiring, not scheduling and information
          gathering. Gather information, schedule & conduct interviews, create
          assessments and get data driven insights to drive hiring decisions
          - without wasting a single minute of recruiter time.
        </p>
        <div className="mt-10 md:mt-[122px] flex flex-col md:flex-row gap-[30px]">
          {Cards.map((resume, index) => (
            <Card data={resume} key={index} />
          ))}
        </div>
      </div>
      <div className="max-w-[300px] lg:max-w-[400px]">
        <img src="/assets/automate/banner.png" className="rounded-lg" />
      </div>
    </div>
  );
};

export default Automate;

const Cards = [
  {
    title: "Create Interviews & Assessments",
    label:
      "Create interviews, assign assessments and automate round 1 data collection and interview processes.",
    icon: "/assets/automate/1.png",
  },
  {
    title: "AI Interviews & Insights",
    label:
      "Our AI Interviewer will call candidates, collect information, analyse responses, and generate insights to be shared with the hiring team.",
    icon: "/assets/automate/2.png",
  },
];
