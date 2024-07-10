const Feedback = () => {
  return (
    <div className="mt-[30px] mb-[30px] mx-6 md:mx-[118px] bg-third-default rounded-lg h-[460px] flex justify-center items-center">
      <div className="w-full md:w-[756px] p-4">
        <p className="text-xl font-semibold md:text-2xl">
          “Valyee is a great product! Lorem Ipsum Lorem IpsumLorem IpsumLorem
          IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem
          IpsumLorem IpsumLorem IpsumLorem Ipsum
        </p>
        <div className="pt-[50px] flex gap-[13px] items-center">
          <img src="/assets/feedback/avatar.png" className="w-14 md:w-20"/>
          <div>
            <p className="text-base md:text-lg text-black/40">Johnny Owens</p>
            <div className="flex gap-[5px]">
              {Array(5)
                .fill(undefined)
                .map((_, index) => (
                  <img src="/assets/feedback/star.png" key={index}/>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;