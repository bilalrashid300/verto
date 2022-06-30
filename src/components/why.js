import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import FadeInSection from "./fadeInSection";
import mobile from "../assets/images/mobile.png";
import coinHalf from "../assets/images/coin-split.png";
import coin from "../assets/images/coin.png";

const Why = ({ data }) => {
  const whyContentListing = data?.map((item, index) => {
    return (
      <div className="greyBox mb-3">
        <img src={item?.img} alt={item?.title} />
        <div>
          <p className="title">{item?.title}</p>
          <FadeInSection>
            <p className="desc">{item?.desc}</p>
          </FadeInSection>
        </div>
      </div>
    );
  });

  return (
    <div id="whyus" className="banner why">
      <div className="curve"></div>
      <Container>
        <Row>
          <Col md={12} className="p-rel z-10 mb-5">
            <FadeInSection>
              <h2 className="text-white heading-lg mb-5 text-center">
                Why Vertochain?
              </h2>
            </FadeInSection>
            <img src={coin} className="coin1" />
          </Col>
          <Col md={6} className="z-10 mt-md-5">
            <img
              src={mobile}
              className="w-100 pe-5 ps-md-0 ps-5  mb-5 mb-md-0"
            />
          </Col>
          <Col md={6} className="z-10 mt-md-5">
            {whyContentListing}
          </Col>
        </Row>
      </Container>
      <img src={coin} className="coin2" />
      <img src={coinHalf} className="coin3" />
      <img src={coin} className="coin3 coin-mb" />
    </div>
  );
};

export default Why;
