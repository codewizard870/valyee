import Slider from "react-slick";
// import "../../../assets/scss/slick-slider/slick.min.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Feedback = () => {
  const settings = {
    dots: false,
    // infinite: true,
    // speed: 500,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    nextArrow: <img src="/assets/feedback/right-arrow.svg" />,
    prevArrow: <img src="/assets/feedback/left-arrow.svg" />,
  };

  return (
    <div className="mt-[30px] mb-[30px] mx-6 md:mx-[100px] max-w-[90vw] lg:max-w-[90vw]">
      <Slider {...settings}>
        {Feedbacks.map((feedback, index) => (
          <div key={index} className="">
            <div className="flex items-center justify-center py-4 px-2 md:px-10 rounded-lg mx-4 md:mx-2 md:py-20 bg-third-default h-[460px] md:h-[460px]">
              <div className="w-full md:w-[756px] min-h-[360px] md:min-h-[320px] flex flex-col justify-between px-8 py-4 md:p-0">
                <p className="text-base font-semibold !leading-relaxed md:text-2xl">
                  {feedback.description}
                </p>
                <div className="flex gap-[13px] items-center pt-4">
                  <img
                    src={feedback.avatar}
                    className="rounded-full w-14 md:w-20"
                  />
                  <div>
                    <p className="text-sm md:text-lg text-black/40">
                      {feedback.name}
                    </p>
                    <div className="flex gap-[5px] mt-2">
                      {Array(feedback.mark)
                        .fill(undefined)
                        .map((_, index) => (
                          <img
                            src="/assets/feedback/star.png"
                            key={index}
                            className="w-4 md:w-5"
                          />
                        ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Feedback;

const Feedbacks = [
  {
    description:
      "I am currently beta testing Valyee - and the product has been  incredibly helpful in reducing the time I spend hiring! With the ever increasing number of applicants for each job post, Valyee has saved us innumerable hours in downloading and manually reviewing CVs.",
    avatar: "/assets/feedback/avatar.png",
    mark: 5,
    name: "Dhruv Tekchandani, Founder",
  },
  {
    description:
      "I'm super impressed with the early access version of Valyee. While the product is still rough around the edges, it's core functionality is excellent, and has been tremendously helpful in reducing the time I spend on tedious, manual hiring processes as a recruiter. The team is responsive and has been incredibly helpful, and I can't wait for the next set of features to roll out.",
    avatar: "/assets/feedback/1.png",
    mark: 5,
    name: "Mehak Bohra, Recruitment Manager",
  },
];
