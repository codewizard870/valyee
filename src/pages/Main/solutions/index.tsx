import Card from "./card";

const Solutions = () => {
  return (
    <div className="mx-6 md:mx-24 pt-[50px] md:pt-[105px] pb-[60px] md:pb-[99px]">
      <p className="text-3xl md:text-[40px] font-semibold">
        Efficient Recruiting Solutions for Startups & Agencies
      </p>
      <div className="mt-[80px] flex flex-wrap justify-between gap-y-[47px]">
        {Cards.map((card, index) => (
          <Card data={card} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Solutions;

const Cards = [
  {
    img: "/assets/solutions/cards.png",
    title: "Eliminate Tedious, Repetitive Tasks",
    label: "Eliminate tedious processes like downloading CVs & screening candidates"
  },
  {
    img: "/assets/solutions/coin.png",
    title: "Collaborate Seamlessly across Teams ",
    label: "Collaborate with hirings managers, clients and across teams"
  },
  {
    img: "/assets/solutions/purse.png",
    title: "Automate Candidate Outreach",
    label: "Write description here, Write description here, Write description here"
  },
  {
    img: "/assets/solutions/purse.png",
    title: "Reduce Costs, Boost Productivity",
    label: "Write description here, Write description here, Write description here"
  },
]
