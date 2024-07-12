import Hero from "./hero";
import Solutions from "./solutions";
import Client from "./client";
import Multiple from "./multiple";
import Top from "./top";
import Automate from "./automate";
import Feedback from "./feedback";

function Home() {
  return (

      <div className="flex justify-center w-full">
        <div className="w-full md:w-[1280px]">
          <Hero />
          <Solutions />
          <Client />
          <Multiple />
          <Top />
          <Automate />
          <Feedback />
        </div>
      </div>
  );
}

export default Home;
