import logo from "../assets/images/logo-w.png";
import facebook from "../assets/images/facebook.svg";
import instagram from "../assets/images/instagram.svg";
import twitter from "../assets/images/twitter.svg";

const Footer = () => {
  return (
    <footer>
      <div className="ocean">
        <div className="wave"></div>
      </div>
      <img src={logo} className="logo-w mb-5" />
      <p className="mb-5">
        Vertochain is a decentralized multichain protocol taht allows users to
        swap directly with integrated multi-blockchain networks whichinclude
        Binance, Ethereum, Avalanche, Tezoz, and Solana.
      </p>
      <div className="social">
        <a href="" target="_blank">
          <div className="iconWrapper">
            <img src={facebook} />
          </div>
        </a>
        <a href="" target="_blank">
          <div className="iconWrapper">
            <img src={instagram} />
          </div>
        </a>
        <a href="" target="_blank">
          <div className="iconWrapper">
            <img src={twitter} />
          </div>
        </a>
      </div>

      <div className="copright">
        <p>
          Copyright &copy; 2022 <span className="underline">FaTecsol</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
