interface Props {
  data: {
    title: string;
    label: string;
    icon: string;
  };
}
const Card: React.FC<Props> = ({ data }) => {
  return (
    <div className="lg:max-w-[255px]">
      <img src={data.icon} className="w-6 rounded-full md:w-8" />
      <p className="font-Roboto font-medium text-sm md:text-base mt-[14px] whitespace-nowrap">
        {data.title}
      </p>
      <p className="text-[12px] md:text-xs font-Roboto text-[#5D6970] mt-[14px]">
        {data.label}
      </p>
    </div>
  );
};

export default Card;
