import React, { Component } from "react";
import "./resources/styles.css";
import { Element } from "react-scroll";

import Header from "./components/header_footer/header";
import Featured from "./components/featured/index";
import PageInfo from "./components/page_info/index";
import Highlights from "./components/Highlights";
import Pricing from "./components/pricing";
import Location from "./components/location/index";
import Footer from "./components/header_footer/Footer";

class App extends Component {
  render() {
    return (
      <div className="App" style={{ height: "1500px" }}>
        <Header />
        <Element name="featured">
          <Featured />
        </Element>
        <Element name="about">
          <PageInfo />
        </Element>
        <Element name="highlights">
          <Highlights />
        </Element>
        <Element name="pricing">
          <Pricing />
        </Element>
        <Element name="location">
          <Location />
        </Element>
        <Footer />
      </div>
    );
  }
}

export default App;
