import { lazy, Suspense, useEffect } from "react";
import Header from "../../components/header";
import Hero from "./hero";
import Solutions from "./solutions";
import Client from "./client";
import Multiple from "./multiple";
import Top from "./top";
import Automate from "./automate";
import Feedback from "./feedback";
import Footer from "../../components/footer";

function Main() {
  return (
    <div>
      <Header />
      <div className="flex justify-center w-full">
        <div className="w-[1280px]">
          <Hero />
          <Solutions />
          <Client />
          <Multiple />
          <Top />
          <Automate />
          <Feedback />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Main;
