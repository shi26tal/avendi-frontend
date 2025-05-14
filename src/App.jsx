import React from "react";

import { AppRoute } from "./Route/AppRoute.jsx";
import { Home } from "./Component/Home.jsx";
import { Footer } from "./Component/Footer.jsx";
import { About } from "./Component/About.jsx";
import { Review } from "./Component/Review.jsx";
import Header from "./Component/Header.jsx";
import { Display } from "./Component/Display.jsx";

function App() {
  return (
    <div>
      <Header></Header>
      <Home></Home>
      <Display></Display>
      <About></About>
      <Review></Review>
      <Footer></Footer>
    </div>
  );
}

export default App;
