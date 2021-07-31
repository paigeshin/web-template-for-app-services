import React, { useState, useEffect } from "react";
import { Features } from "../features";
import { About } from "../about";
import { Services } from "../services";
import JsonData from "../../data/data.json";
import { Header } from "../header";

const Landing = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <Header data={landingPageData.Header} />
      <Features data={landingPageData.Features} />
      <About data={landingPageData.About} />
      <Services data={landingPageData.Services} />
      {/* <Gallery /> */}
      {/* <Testimonials data={landingPageData.Testimonials} /> */}
      {/* <Team data={landingPageData.Team} /> */}
    </div>
  );
};

export default Landing;
