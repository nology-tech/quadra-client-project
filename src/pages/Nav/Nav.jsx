import "./Nav.scss";
import Logo from "../../assets/images/logo.png";
import Contacts from "../../assets/images/non-focus-contacts.png";
import Wallet from "../../assets/images/non-focus-wallet.png";
import LiveRate from "../../assets/images/non-focus-graph.png";
import Convert from "../../assets/images/non-focus-convert.png";
const Nav = () => {
  return (
    <div className="nav">
      <Logo />
      <div className="nav__menu">
        <h1>Menu</h1>
        <div className="menu__button-row">
          <img src={Contacts} alt="contacts"></img>
          <p>Contacts</p>
        </div>
        <div className="menu__button">
          <img src={Wallet} alt="wallet"></img>
          <p>Wallet</p>
        </div>
        <div className="menu__button">
          <img src={LiveRate} alt="graph"></img>
          <p>Live rates</p>
        </div>
        <div className="menu__button">
          <img src={Convert} alt="convert"></img>
          <p>Convert</p>
        </div>
        <div className="menu__button">
          <img src={Transfer} alt="transfer"></img>
          <p>Transfer</p>
        </div>
      </div>
    </div>
  );
};

export default Nav;
