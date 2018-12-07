import React, { Component } from "react";
import MyButton from "../utils/MyButton";
import Zoom from "react-reveal/Zoom";

export default class Pricing extends Component {
  state = {
    prices: [100, 150, 250],
    positions: ["Silver", "Gold", "Diamond"],
    desc: [
      "amet tritani ceteros has. Eum saepe antiopam definitionem te, id has doctus utroque oportere. Legere inimicus sit ea, pri ut doctus euismod rationibus, et eius iusto complectitur eam. Ea eos apeirian tractatos, sed ea mandamus voluptatibus.",
      "Est in insolens moderatius, fugit assentior te vim. Sed alia graeci fierent in, labores corpora mediocritatem ne mei. Animal interpretaris id his. Nam te congue efficiendi. Quo tempor sensibus cu, at vim suscipit appareat.",
      "Lorem ipsum dolor sit amet, at per exerci denique. An eum illud iracundia, elitr libris populo et eum, et amet tritani ceteros has. Eum saepe antiopam definitionem te, id has doctus utroque oportere. Legere inimicus sit ea"
    ],
    linkto: [
      "http://www.davirlein.com/portfolios",
      "http://www.davirlein.com/about-me",
      "http://www.davirlein.com/contact"
    ],
    delay: [500, 0, 500]
  };

  showBoxes = () =>
    this.state.prices.map((box, i) => (
      <Zoom delay={this.state.delay[i]} key={i}>
        <div className="pricing_item">
          <div className="pricing_inner_wrapper">
            <div className="pricing_title">
              <span>${this.state.prices[i]}</span>
              <span>{this.state.positions[i]}</span>
            </div>
            <div className="pricing_description">
              <span>{this.state.desc}</span>
            </div>
            <div className="pricing_buttons">
              <MyButton
                text="Purchase"
                bck="#ffa800"
                color="#ffffff"
                link={this.state.linkto[i]}
              />
            </div>
          </div>
        </div>
      </Zoom>
    ));
  render() {
    return (
      <div className="bck_black">
        <div className="center_wrapper pricing_section">
          <h2>Pricing</h2>
          <div className="pricing_wrapper">{this.showBoxes()}</div>
        </div>
      </div>
    );
  }
}
