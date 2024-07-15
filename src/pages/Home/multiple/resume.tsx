interface Props {
  data: {
    title: string;
    label: string;
    icon: string;
  };
}
const Resume: React.FC<Props> = ({ data }) => {
  return (
    <div className="lg:max-w-[300px]">
      <img src={data.icon} className="w-6 rounded-lg md:w-8" />
      <p className="font-Roboto font-medium text-sm md:text-base mt-[14px]">
        {data.title}
      </p>
      <p className="text-[10px] md:text-xs font-Roboto text-[#5D6970] mt-[14px] lg:max-w-[255px]">
        {data.label}
      </p>
    </div>
  );
};

export default Resume;
