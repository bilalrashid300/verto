import React from "react";
import { Accordion, Col, Container, Nav, Row, Tab } from "react-bootstrap";
import FadeInSection from "./fadeInSection";
import lock from "../assets/images/lock.svg";
import coin from "../assets/images/coin.png";

const RoadMap = ({ data }) => {

  return (
    <div className="banner road-map margin-200 margin-170 ">
    <div className="purpleRipple" id="roadmap">
      <Container>
        <Row className="justify-content-center">
          <Col md={12} className="">
            <FadeInSection>
              <p className="heading-lg mb-5 text-white text-center fw-6">
                Road Map
              </p>
            </FadeInSection>
          </Col>
          <Col md={4} className="p-rel">
            <img src={lock} className="w-100 px-md-0 px-5" />
            <img src={coin} className="coin" />
          </Col>
          <Col md={7} className="ps-md-5">
            <Tab.Container
              id="left-tabs-example"
              defaultActiveKey="first"
            >
              <Row className="customTabs">
                <Col sm={4}>
                  <FadeInSection>
                    <Nav variant="pills" className="flex-column">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Phase 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Phase 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Phase 3</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="forth">Phase 4</Nav.Link>
                      </Nav.Item>
                    </Nav>
                  </FadeInSection>
                </Col>
                <Col sm={8}>
                  <FadeInSection>
                    <Tab.Content>
                      <Tab.Pane eventKey="first">
                        <ul>
                          <li>Team Development</li>
                          <li>Website Creation</li>
                          <li>White Paper Development</li>
                          <li>Initiation Of Project</li>
                        </ul>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <ul>
                          <li>Conceptual development of the platform</li>
                          <li>Community development</li>
                          <li>
                            The initial sale of tokens and private
                            fundraising
                          </li>
                          <li>Incentive for users</li>
                          <li>Partnership creation</li>
                        </ul>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <ul>
                          <li>Chainlink partnership</li>
                          <li>End of token Presales</li>
                          <li>Launch on Pancakeswap</li>
                        </ul>
                      </Tab.Pane>
                      <Tab.Pane eventKey="forth">
                        <ul>
                          <li>
                            Multichain development, testing and launch
                          </li>
                          <li>Token listings and Binance launch</li>
                          <li>Staking of tokens</li>
                          <li>
                            Code audit, appraisal, and documentation
                          </li>
                        </ul>
                      </Tab.Pane>
                    </Tab.Content>
                  </FadeInSection>
                </Col>
              </Row>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
    </div>
    <div id="faq">
      <Container>
        <Row className="justify-content-center margin-100">
          <Col md={7} className="text-center">
            <p className="text-purple fw-7">FAQ</p>
            <FadeInSection>
              <h2 className="heading-lg">
                Popular Questions About VertoChain
              </h2>
            </FadeInSection>
          </Col>
          <Col md={12} className="mt-5">
            <Accordion>
              <Row className="mt-5 justify-content-center">
                <Col md={5}>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>
                      What is VertoChain?
                    </Accordion.Header>
                    <Accordion.Body>
                      Vertochain is a decentralized multichain protocol
                      that allows users to swap directly with integrated
                      multi-blockchain networks which include Binance,
                      Ethereum, Avalanche, Tezoz, and Solana.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>
                      Is VertoChain a decentralized platform?
                    </Accordion.Header>
                    <Accordion.Body>
                      Yes, VertoChain is a decentralized platform which
                      allows you to have full control over your funds and
                      transact to any Bep-20 supported wallet.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2">
                    <Accordion.Header>
                      Where can you buy $VERT Coin?
                    </Accordion.Header>
                    <Accordion.Body>
                      $VERT will be available on many of the major DEXs
                      once our presale has ended.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="3">
                    <Accordion.Header>
                      How can I sell my $VERT coin?
                    </Accordion.Header>
                    <Accordion.Body>
                      You can sell your coin on any of the decentralized
                      or centralized exchanges listed here.
                    </Accordion.Body>
                  </Accordion.Item>
                </Col>
                <Col md={5}>
                  <Accordion.Item eventKey="4">
                    <Accordion.Header>
                      Is VertoChain working on having its own blockchain?
                    </Accordion.Header>
                    <Accordion.Body>
                      Definitely. Works are currently ongoing to achieve
                      that aim.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="5">
                    <Accordion.Header>
                      Is VertoChain Legal?
                    </Accordion.Header>
                    <Accordion.Body>
                      VertoChain is tradeable in any country where crypto
                      is legal. You can check the list to check if your
                      country is among the supported countries.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="6">
                    <Accordion.Header>
                      What are the key features of VertoChain?
                    </Accordion.Header>
                    <Accordion.Body>
                      <ul>
                        <li>Multi-Chain network supported</li>
                        <li>Comfortability</li>
                        <li>Transparency</li>
                      </ul>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="7">
                    <Accordion.Header>
                      How do I get started on VertoChain?
                    </Accordion.Header>
                    <Accordion.Body>
                      Enter our presale and purchase your $VERT Tokens.
                    </Accordion.Body>
                  </Accordion.Item>
                </Col>
              </Row>
            </Accordion>
          </Col>
        </Row>
      </Container>
      <img src={coin} className="coin-right" />
    </div>
  </div>
  );
};

export default RoadMap;
