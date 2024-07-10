const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row gap-10 justify-between items-center mt-[100px] md:mt-[176px] mx-6 md:mx-24 mb-[78px]">
      <div className="w-full md:w-[450px]">
        <p className="text-4xl font-semibold !leading-normal md:text-5xl">
          Hire Top
          <br />
          Candidates,
          <br />
          Superfast
        </p>
        <p className="pt-1 text-base !leading-relaxed md:text-lg">
          Automatically screen, rank and interview candidates. Find the perfect
          hire faster, easier and at a fraction of the cost!
        </p>
        <button className="py-2 mt-4 text-base text-white rounded-lg md:text-lg bg-primary-default hover:bg-primary-default/70 px-7">
          Try it for Free!
        </button>
      </div>
      <div className="rounded-[20px] bg-secondary-default">
        <img src="/assets/hero/banner.png" />
      </div>
    </div>
  );
};

export default Hero;
