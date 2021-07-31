import { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Contact } from "./components/contact";
import JsonData from "./data/data.json";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Landing from "./components/Landing/landing";
import { Privacy } from "./components/privacy/privacy";

// export const scroll = new SmoothScroll('a[href*="#"]', {
//   speed: 1000,
//   speedAsDuration: true,
// });

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <BrowserRouter>
      <Navigation />
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/privacy" exact component={Privacy} />
      </Switch>
      <Contact data={landingPageData.Contact} />
    </BrowserRouter>
  );
};

export default App;
