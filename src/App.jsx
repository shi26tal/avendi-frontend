import React from "react";

import { AppRoute } from "./Route/AppRoute.jsx";
import { Home } from "./Component/Home.jsx";
import { Footer } from "./Component/Footer.jsx";
import { About } from "./Component/About.jsx";
import Header from "./Component/Header.jsx";
import { Display } from "./Component/Display.jsx";
import { QA } from "./Component/QA.jsx";
import TestimonialSection from "./Component/TestimonialSection.jsx";
import { Slider } from "./Component/Slider.jsx";

function App() {
  return (
    <div>
      <Header></Header>
      <Home></Home>
      <Display></Display>
      <About></About>
      {/* <TestimonialSection></TestimonialSection> */}
      <Slider></Slider>
      <QA></QA>
      <Footer></Footer>
    </div>
  );
}

export default App;
