import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import FadeInSection from "./fadeInSection";
import coin from "../assets/images/coin.png";

const Description = () => {
  return (
    <div className="my-5">
      <Container>
        <Row className="justify-content-center mb-5">
          <Col md={12} className="text-center coinWrapperSm">
            <img src={coin} className="coin" />
            <h2 className="heading-lg mb-5">Tokenomics</h2>
            <FadeInSection>
              <p className="small mb-5 px-md-5 px-4">
                The official utility token of VertoChain is $VERT, as it serves
                as the ticket to accessing the features of VertoChain. Only
                holders of $VERT tokens will be considered for special community
                roles and initiatives like being part of the DAO. Furthermore,
                interaction with the platform will be gamified and incentivized
                via rewards in $VERT. With this, more users will take up the
                challenge as a fun activity that brings financial independence.
              </p>
            </FadeInSection>
          </Col>
          <Col md={6}>
            <FadeInSection>
              <p className="px-md-0 px-4 mb-5 mb-md-3">
                We understand that our users and several early adopters may be
                first-time users of DeFi services; this is why extra caution and
                security measures will be put in place to forestall hack
                attempts on VertoChain’s native crypto wallets. An anti-whale
                system will be built into VertoChain’s ecosystem to prevent
                scenarios where whales attempt to use large stores of liquidity
                to swing market prices in their favor using quick buy and sell
                actions.{" "}
              </p>
            </FadeInSection>
          </Col>
          <Col md={6} className="coinWrapperLg">
            <img src={coin} className="coin" />
            <FadeInSection>
              <p className="px-md-0 px-4">
                Leveraging BSC’s PoSA standard, transaction fees will be
                nominal. The deflationary token model is employed here to create
                scarcity of the $VERT tokens. If the token demand remains the
                same or increases, the practical system of the token will
                increase its value as more $VERT tokens are taken off the market
                by burning. The fact that BSC is the third most valuable DeFi
                blockchain by assets locked in smart contracts also makes it a
                viable investment choice.
              </p>
            </FadeInSection>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Description;
