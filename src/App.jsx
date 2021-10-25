import { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Features } from "./components/features";
import { Become } from "./components/become";
import { Island } from "./components/island";
import { Challenging } from "./components/challenging";
import { Level } from "./components/level";
import { Battle } from "./components/battle";
import { NFTS } from "./components/nfts";
import { Earning } from "./components/earning";
import { Roadmap } from "./components/roadmap";
import { Services } from "./components/services";
import { Gallery } from "./components/gallery";
import { Testimonials } from "./components/testimonials";
import { Team } from "./components/Team";
import { Contact } from "./components/contact";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <Navigation />
      <Header data={landingPageData.Header} />
      <Features data={landingPageData.Features} />
      <Island data={landingPageData.Island} />
      <Become data={landingPageData.Features} />
      <Challenging data={landingPageData.Challenging} />
      <Level data={landingPageData.Level} />
      <Battle data={landingPageData.Battle} />
      <NFTS data={landingPageData.NFTS} />
      <Earning data={landingPageData.Earning} />
      <Roadmap data={landingPageData.Roadmap} />
      <Contact data={landingPageData.Contact} />
    </div>
  );
};

export default App;
