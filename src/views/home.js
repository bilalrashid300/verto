import React, { useEffect } from "react";
import Parallax from "react-rellax";
import FadeInSection from "../components/fadeInSection";
import {
  Accordion,
  Button,
  Col,
  Container,
  Nav,
  Row,
  Tab,
} from "react-bootstrap";
import Header from "../components/header";
import card1 from "../assets/images/cardimg1.svg";
import card2 from "../assets/images/cardimg2.svg";
import CustomCard from "../components/customCard";
import Counter from "../components/counter";
import mobile from "../assets/images/mobile.png";
import feedback from "../assets/images/feedback.svg";
import dollar from "../assets/images/dollar.svg";
import priority from "../assets/images/priority.svg";
import coin from "../assets/images/coin.png";
import girl from "../assets/images/girl.png";
import index1 from "../assets/images/1.png";
import index2 from "../assets/images/2.png";
import index3 from "../assets/images/3.png";
import index4 from "../assets/images/4.png";
import dollarCoin from "../assets/images/dollar-coin.png";
import dashboard from "../assets/images/dashboard.png";
import graph from "../assets/images/graph.png";
import tech from "../assets/images/tech.png";
import coin3 from "../assets/images/coin3.png";
import lock from "../assets/images/lock.svg";
import Footer from "../components/footer";
import phone from "../assets/images/phone.png";
import graph2 from "../assets/images/graph2.png";
import graph3 from "../assets/images/graph3.png";
import coinHalf from "../assets/images/coin-split.png";
import illus1 from "../assets/images/illus1.png";
import illus2 from "../assets/images/illus2.png";
import illus3 from "../assets/images/illus3.png";
import illus4 from "../assets/images/illus4.png";

const Home = () => {
  const whyContent = [
    {
      img: feedback,
      title: "Affordable rates",
      desc: "We work with several cryptocurrency trading platforms to get you the best deal on the market.",
    },
    {
      img: priority,
      title: "Caring service",
      desc: "We value your privacy and do not have access to your cash.",
    },
    {
      img: dollar,
      title: "Unlimited Crypto Exchange",
      desc: "Swap Crypto faster, noncustodial",
    },
  ];

  const vertoContent = [
    {
      img: index1,
      title: "Choose a cryptocurrency",
      desc: "Select an exchange pair",
    },
    {
      img: index2,
      title: "Fill in your wallet's address",
      desc: "Provide your wallet address where you want your swapped tokens to be sent",
    },
    {
      img: index3,
      title: "Make a deposit",
      desc: "Send the amount of cryptocurrency required for the exchange.",
    },
    {
      img: index4,
      title: "Receive Your Funds",
      desc: "Get your cryptocurrency swapped.",
    },
  ];

  const whyContentListing = whyContent?.map((item, index) => {
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

  const vertoContentListing = vertoContent?.map((item, index) => {
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
    <>
      <Header />
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
                  users to swap directly with integrated multi-blockchain
                  networks which include Binance, Ethereum, Avalanche, Tezoz,
                  and Solana.
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
      <div id="howto" className="banner verto">
        <Container>
          <Row className="justify-content-center">
            <Col md={8} className="text-center">
              <h2 className="heading-lg mb-5">How to use Vertochain</h2>
              <p className="mb-5">
                So, We’ve created a powerful yet easy-to-use solution that
                allows you to be efficient and informed every step of the way.
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
      <div id="aboutus" className="banner about">
        <Container>
          <Row className="justify-content-center">
            <Col md={12} className="text-center">
              <FadeInSection>
                <h2 className="heading-lg mb-5">About us</h2>
              </FadeInSection>
              <FadeInSection>
                <p className="small mb-5">
                  The word “VertoChain” is a mission statement. A confirmation
                  of what the platform is meant for. Verto is Latin for Swap,
                  and chain is simply a truncation of blockchain When put
                  together, VertoChain is a platform that allows for
                  peer-to-peer trading and swapping of digital assets across
                  five blockchains: Binace Smart Chain, Avalanche, Tezos,
                  Ethereum and Solana.
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
                  farming, liquidity provision and yield farming all for the
                  most competitive rates.
                </p>
              </FadeInSection>
              <FadeInSection>
                <p>
                  The VertoChain platform offers complete democratization of
                  power among its users; they will have a say in how the
                  platform is run and possible changes on how to make it better.{" "}
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
                  blockchains and hasten the adoption of crypto assets across
                  the globe. We believe that near-zero charges per swap
                  transaction will be a service incentive for users looking to
                  move their assets around.
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
                  template to build. This is what the DeFi space needs, an
                  example for other projects to mirror. We believe that
                  combining expert service delivery with the essentials of
                  decentralized finance the way we do will lead to an
                  industry-wide revolution. We intend to capture all these
                  without compromising security.
                </p>
              </FadeInSection>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="tech my-md-5 mb-5">
        <img src={tech} className="w-100 px-md-5 mb-5 mb-md-0" />
      </div>
      <div className="my-5">
        <Container>
          <Row className="justify-content-center mb-5">
            <Col md={12} className="text-center coinWrapperSm">
              <img src={coin} className="coin" />
              <h2 className="heading-lg mb-5">Tokenomics</h2>
              <FadeInSection>
                <p className="small mb-5 px-md-5 px-4">
                  The official utility token of VertoChain is $VERT, as it
                  serves as the ticket to accessing the features of VertoChain.
                  Only holders of $VERT tokens will be considered for special
                  community roles and initiatives like being part of the DAO.
                  Furthermore, interaction with the platform will be gamified
                  and incentivized via rewards in $VERT. With this, more users
                  will take up the challenge as a fun activity that brings
                  financial independence.
                </p>
              </FadeInSection>
            </Col>
            <Col md={6}>
              <FadeInSection>
                <p className="px-md-0 px-4 mb-5 mb-md-3">
                  We understand that our users and several early adopters may be
                  first-time users of DeFi services; this is why extra caution
                  and security measures will be put in place to forestall hack
                  attempts on VertoChain’s native crypto wallets. An anti-whale
                  system will be built into VertoChain’s ecosystem to prevent
                  scenarios where whales attempt to use large stores of
                  liquidity to swing market prices in their favor using quick
                  buy and sell actions.{" "}
                </p>
              </FadeInSection>
            </Col>
            <Col md={6} className="coinWrapperLg">
              <img src={coin} className="coin" />
              <FadeInSection>
                <p className="px-md-0 px-4">
                  Leveraging BSC’s PoSA standard, transaction fees will be
                  nominal. The deflationary token model is employed here to
                  create scarcity of the $VERT tokens. If the token demand
                  remains the same or increases, the practical system of the
                  token will increase its value as more $VERT tokens are taken
                  off the market by burning. The fact that BSC is the third most
                  valuable DeFi blockchain by assets locked in smart contracts
                  also makes it a viable investment choice.
                </p>
              </FadeInSection>
            </Col>
          </Row>
        </Container>
      </div>
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
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
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
                              <li>Code audit, appraisal, and documentation</li>
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
                        <Accordion.Header>What is VertoChain?</Accordion.Header>
                        <Accordion.Body>
                          Vertochain is a decentralized multichain protocol that
                          allows users to swap directly with integrated
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
                          $VERT will be available on many of the major DEXs once
                          our presale has ended.
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="3">
                        <Accordion.Header>
                          How can I sell my $VERT coin?
                        </Accordion.Header>
                        <Accordion.Body>
                          You can sell your coin on any of the decentralized or
                          centralized exchanges listed here.
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
                          VertoChain is tradeable in any country where crypto is
                          legal. You can check the list to check if your country
                          is among the supported countries.
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
      <Footer />
    </>
  );
};

export default Home;
