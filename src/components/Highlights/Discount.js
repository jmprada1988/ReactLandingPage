import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import MyButton from "../utils/MyButton";

export default class Discount extends Component {
  state = {
    discountStart: 0,
    discountEnd: 30
  };

  porcentage = () => {
    if (this.state.discountStart < this.state.discountEnd) {
      this.setState({
        discountStart: this.state.discountStart + 1
      });
    }
  };
  componentDidUpdate() {
    setTimeout(() => {
      this.porcentage();
    }, 40);
  }
  render() {
    return (
      <div className="center_wrapper">
        <div className="discount_wrapper">
          <Fade onReveal={() => this.porcentage()}>
            <div className="discount_porcentage">
              <span>{this.state.discountStart} %</span>
              <span>Off</span>
            </div>
          </Fade>
          <Slide right>
            <div className="discount_description">
              <h3>Here is where you put boring html like Tickets Prices</h3>
              <p>
                Lorem ipsum dolor sit amet, nam principes assentior
                conclusionemque te, ei vel quis inani. Ei cum facer appetere
                adipisci, dolorum utroque debitis ei usu, pro te tale modus
                assueverit. Corpora constituam an sit. Has graeco antiopam ne,
                ea vix nisl mutat ridens. Pro eligendi convenire democritum eu,
                posse viris iracundia ad vel, sed erat aeterno detracto at.
                Lorem debitis scaevola nam ei, graece delectus temporibus in
                has. Cum an enim paulo. Splendide consetetur vituperatoribus mea
                no, an mei singulis evertitur, vel facete euismod convenire ad.
                Vim ea laudem iracundia. Ne dicat doctus detraxit quo, errem
                scaevola et eam.
              </p>

              <MyButton
                text="Purchase Tickets"
                bck="#ffa800"
                color="#ffffff"
                link="http://www.davirlein.com"
              />
            </div>
          </Slide>
        </div>
      </div>
    );
  }
}
