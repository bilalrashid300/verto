import React from "react";
import feedback from "../assets/images/feedback.svg";
import dollar from "../assets/images/dollar.svg";
import priority from "../assets/images/priority.svg";
import index1 from "../assets/images/1.png";
import index2 from "../assets/images/2.png";
import index3 from "../assets/images/3.png";
import index4 from "../assets/images/4.png";
import tech from "../assets/images/tech.png";
import Layout from "../components/layout";
import Banner from "../components/banner";
import Presale from "../components/presale";
import Why from "../components/why";
import HowTo from "../components/howto";
import About from "../components/about";
import FullViewImage from "../components/fullViewImage";
import RoadMap from "../components/roadMap";

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

  return (
    <>
      <Layout>
        <Banner />
        <Presale />
        <Why data={whyContent} />
        <HowTo data={vertoContent} />
        <About />
        <FullViewImage data={tech} />
        <RoadMap />
      </Layout>
    </>
  );
};

export default Home;
