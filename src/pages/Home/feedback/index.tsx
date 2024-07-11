import Slider from "react-slick";
// import "../../../assets/scss/slick-slider/slick.min.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Feedback = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <div className="mt-[30px] mb-[30px] mx-6 md:mx-[100px]">
      <Slider {...settings}>
        {Feedbacks.map((feedback, index) => (
          <div key={index}>
            <div className="flex items-center justify-center py-4 mx-4 rounded-lg md:mx-2 md:py-20 bg-third-default">
              <div className="w-full md:w-[756px] p-4">
                <p className="text-base font-semibold !leading-relaxed md:text-2xl h-[230px] overflow-hidden">
                  {feedback.description}
                </p>
                <div className="pt-[50px] flex gap-[13px] items-center">
                  <img
                    src={feedback.avatar}
                    className="rounded-full w-14 md:w-20"
                  />
                  <div>
                    <p className="text-sm md:text-lg text-black/40 whitespace-nowrap w-[200px] overflow-hidden">
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
      "Valyee has been a game-changer for our hiring process. The product has significantly reduced the time we spend sifting through CVs and has streamlined our recruitment efforts. With the increasing number of applicants for each job post, Valyee has saved us countless hours. It's an invaluable tool for any HR team!",
    avatar: "/assets/feedback/1.png",
    mark: 5,
    name: "Ava Johnson, HR Manager at BrightFuture Inc.",
  },
  {
    description:
      "We've been beta testing Valyee, and the impact on our hiring process has been outstanding. The time saved on downloading and manually reviewing CVs is incredible. With more applicants than ever, Valyee has been essential in managing our recruitment efficiently. Highly recommended!",
    avatar: "/assets/feedback/2.png",
    mark: 5,
    name: "Ethan Martinez, Recruitment Lead at TechWave Solutions",
  },
  {
    description:
      "Using Valyee during our beta testing phase has been incredibly beneficial. It has drastically cut down the time required to handle the influx of job applications. Valyee automates the CV review process, saving us numerous hours. It's a must-have for any organization facing a high volume of applicants.",
    avatar: "/assets/feedback/3.png",
    mark: 5,
    name: "Olivia Smith, Talent Acquisition Specialist at InnovateX",
  },
];
