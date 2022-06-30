import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import FadeInSection from "./fadeInSection";
import card1 from "../assets/images/cardimg1.svg";
import card2 from "../assets/images/cardimg2.svg";
import Counter from "./counter";
import CustomCard from "./customCard";

const Presale = () => {
  return (
    <div className="banner bottom">
      <Container>
        <Row>
          <Col md={12} className="counterWrapper text-center">
            <h2 className="heading-lg">
              <label className="underline">Presale</label>
            </h2>
            <FadeInSection>
              <Counter />
            </FadeInSection>
            <Button variant="dark" className="mt-4">
              Presale
            </Button>
          </Col>
          <Col md={7} xs={10} className="mb-5">
            <FadeInSection>
              <CustomCard
                img={card1}
                type="light"
                text="Vertochain offers a
              comprehensive collection of
              services for customers who
              want to manage their crypto
              assets o  the most prominent
              blockchains and use peer-to-
              peer exchanges in a
              decentralized and open manner."
              />
            </FadeInSection>
          </Col>
          <Col md={5}></Col>
          <Col md={5}></Col>
          <Col md={7} xs={10} className="justify-self-end">
            <FadeInSection>
              <CustomCard
                img={card2}
                type="dark"
                text="Vertochain wishes to provide 
              Defi Swap to all of its users at
              the best possible pricing. We
              are on a mission to establish
              a marketplace and promote
              blockchain and cryptocurrency
              education to individuals globally
              to ensure financial and
              technological literacy."
              />
            </FadeInSection>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Presale;
