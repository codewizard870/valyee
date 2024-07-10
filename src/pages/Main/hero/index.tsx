const Hero = () => {
  return (
    <div className="flex justify-between items-center mt-[176px] mx-24 mb-[78px]">
      <div className="w-[450px]">
        <p className="text-5xl font-semibold leading-normal">
          Hire Top
          <br />
          Candidates,
          <br />
          Superfast
        </p>
        <p className="pt-1 text-lg leading-relaxed">
          Automatically screen, rank and interview candidates. Find the perfect
          hire faster, easier and at a fraction of the cost!
        </p>
        <button className="py-2 mt-4 text-lg text-white rounded-lg bg-primary-default hover:bg-primary-default/70 px-7">
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
