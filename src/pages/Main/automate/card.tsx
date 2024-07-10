interface Props {
  data: {
    title: string;
    label: string;
  };
}
const Card: React.FC<Props> = ({ data }) => {
  return (
    <div className="w-[255px]">
      <img src="/assets/multiple/resume.png" />
      <p className="font-Roboto font-medium text-base mt-[14px] whitespace-nowrap">
        {data.title}
      </p>
      <p className="text-xs font-Roboto text-[#5D6970] mt-[14px]">
        {data.label}
      </p>
    </div>
  );
};

export default Card;