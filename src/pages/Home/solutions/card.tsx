interface Props {
  data: {
    img: string;
    title: string;
    label: string;
  };
}

const Card: React.FC<Props> = ({ data }) => {
  return (
    <div className="flex gap-[41px] items-center w-[464px]">
      <img src={data.img} />
      <div>
        <p className="text-base font-semibold leading-relaxed md:text-lg">{data.title}</p>
        <p className="pt-2 text-sm md:text-base text-gray-1/40">{data.label}</p>
      </div>
    </div>
  );
};

export default Card;
