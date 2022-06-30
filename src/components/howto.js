import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import dollarCoin from "../assets/images/dollar-coin.png";
import girl from "../assets/images/girl.png";

const HowTo = ({ data }) => {

  const vertoContentListing = data?.map((item, index) => {
    return (
      <div className="greyBox mb-3">
        <img src={item?.img} alt={item?.title} />
        <div>
          <p className="title">{item?.title}</p>
          <p className="desc">{item?.desc}</p>
        </div>
      </div>
    );
  });

  return (
    <div id="howto" className="banner verto">
      <Container>
        <Row className="justify-content-center">
          <Col md={8} className="text-center">
            <h2 className="heading-lg mb-5">How to use Vertochain</h2>
            <p className="mb-5">
              So, We’ve created a powerful yet easy-to-use solution that allows
              you to be efficient and informed every step of the way.
            </p>
          </Col>
          <Col
            md={5}
            className="p-rel pe-md-5 ps-md-3 px-3 d-flex justify-content-center align-items-end"
          >
            <img src={dollarCoin} className="verto-coin" />
            <img src={girl} className="w-100 mt-md-0 mt-5" />
          </Col>
          <Col md={7} className="mb-md-5">
            {vertoContentListing}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HowTo;
