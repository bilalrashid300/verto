import React, { useEffect } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Parallax from "react-rellax";
import FadeInSection from "./fadeInSection";
import phone from "../assets/images/phone.png";
import graph2 from "../assets/images/graph2.png";
import graph3 from "../assets/images/graph3.png";

const Banner = () => {

  useEffect(() => {
    const elements = document.querySelectorAll(".rellax");
    const wrapper = document.querySelector(".top");
    if (elements?.length) {
      elements.forEach((element) => {
        wrapper.addEventListener("mousemove", function (e) {
          var x = (e.clientX * 8) / 250;
          var y = (e.clientY * 8) / 250;
          element.style.transform = `translateX(${x}px) translateY(${y}px)`;
        });
      });
    }
  }, []);

  return (
    <div id="home" className="banner top">
      <Container>
        <Row>
          <Col md={5}>
            <FadeInSection>
              <h2 className="heading-lg mb-0">
                Swapping Made Faster Using Vertochain Token
              </h2>
              <p className="my-5">
                Vertochain is a decentralized multichain protocol that allows
                users to swap directly with integrated multi-blockchain networks
                which include Binance, Ethereum, Avalanche, Tezoz, and Solana.
              </p>
            </FadeInSection>
            <Button variant="dark">White Paper</Button>
          </Col>
          <Col md={7} className="bannerImg">
            <FadeInSection>
              <img src={graph3} className="graph3 rellax" />
            </FadeInSection>
            <Parallax speed={4}>
              <img src={phone} className="phone" speed={-2} />
            </Parallax>
            <FadeInSection>
              <img src={graph2} className="graph2 rellax" />
            </FadeInSection>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Banner;
