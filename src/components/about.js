import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import FadeInSection from "./fadeInSection";
import illus1 from "../assets/images/illus1.png";
import illus2 from "../assets/images/illus2.png";
import illus3 from "../assets/images/illus3.png";
import illus4 from "../assets/images/illus4.png";

const About = () => {
  return (
    <div id="aboutus" className="banner about">
      <Container>
        <Row className="justify-content-center">
          <Col md={12} className="text-center">
            <FadeInSection>
              <h2 className="heading-lg mb-5">About us</h2>
            </FadeInSection>
            <FadeInSection>
              <p className="small mb-5">
                The word “VertoChain” is a mission statement. A confirmation of
                what the platform is meant for. Verto is Latin for Swap, and
                chain is simply a truncation of blockchain When put together,
                VertoChain is a platform that allows for peer-to-peer trading
                and swapping of digital assets across five blockchains: Binace
                Smart Chain, Avalanche, Tezos, Ethereum and Solana.
              </p>
            </FadeInSection>
          </Col>
        </Row>
        <Row className="justify-content-between gridRow">
          <Col md={1}></Col>
          <Col md={5} className="mb-md-5 mb-4">
            <FadeInSection>
              <p className="fw-7">
                The main features of the VertoChain platform are multi-chain
                farming, liquidity provision and yield farming all for the most
                competitive rates.
              </p>
            </FadeInSection>
            <FadeInSection>
              <p>
                The VertoChain platform offers complete democratization of power
                among its users; they will have a say in how the platform is run
                and possible changes on how to make it better.{" "}
              </p>
            </FadeInSection>
          </Col>
          <Col md={6} className="mb-md-5 mb-4 text-center">
            <FadeInSection right={true}>
              <img src={illus1} className="w-100 graph" />
            </FadeInSection>
          </Col>
        </Row>
        <Row className="justify-content-center gridRow">
          <Col md={5} className="mb-md-5 mb-4 text-center order-2 order-md-1">
            <FadeInSection left={true}>
              <img src={illus2} className="w-100" />
            </FadeInSection>
          </Col>
          <Col md={1} className="order-md-2"></Col>
          <Col md={5} className="mb-md-5 mb-4 pe-5 order-1 order-md-3">
            <FadeInSection>
              <p className="fw-7">
                Our team will ensure that blockchain technology's essence and
                complex nature are captured but overlaid with a seamless user
                experience and a simple but intuitive user interface.
              </p>
            </FadeInSection>
            <FadeInSection>
              <p>
                Users will have the latest and essential tools and features at
                their disposal that will enable them to make the most of the
                platform.
              </p>
            </FadeInSection>
          </Col>
        </Row>
        <Row className="justify-content-between align-items-center gridRow">
          <Col md={1}></Col>
          <Col md={5} className="mb-md-5 mb-4">
            <FadeInSection>
              <h2 className="mb-5">Our Mission</h2>
            </FadeInSection>
            <FadeInSection>
              <p>
                To improve users' access and use of digital assets throughout
                blockchains and hasten the adoption of crypto assets across the
                globe. We believe that near-zero charges per swap transaction
                will be a service incentive for users looking to move their
                assets around.
              </p>
            </FadeInSection>
          </Col>
          <Col md={6} className="mb-md-5 mb-4 text-center">
            <FadeInSection right={true}>
              <img src={illus3} className="w-100" />
            </FadeInSection>
          </Col>
        </Row>
        <Row className="justify-content-between align-items-center gridRow">
          <Col md={6} className="mb-md-5 mb-4 text-center order-2 order-md-1">
            <FadeInSection left={true}>
              <img src={illus4} className="w-100 px-4" />
            </FadeInSection>
          </Col>
          <Col md={5} className="mb-md-5 mb-4 order-1 order-md-2">
            <FadeInSection>
              <h2 className="mb-5">Our Vision</h2>
            </FadeInSection>
            <FadeInSection>
              <p>
                Successful implementation motivates others and serves as a
                template to build. This is what the DeFi space needs, an example
                for other projects to mirror. We believe that combining expert
                service delivery with the essentials of decentralized finance
                the way we do will lead to an industry-wide revolution. We
                intend to capture all these without compromising security.
              </p>
            </FadeInSection>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
