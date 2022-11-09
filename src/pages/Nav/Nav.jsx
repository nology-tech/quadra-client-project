import "./Nav.scss";
import Logo from "../../components/Logo/Logo";
import Contacts from "../../assets/images/non-focus-contacts.png";
import Wallet from "../../assets/images/non-focus-wallet.png";
import LiveRate from "../../assets/images/non-focus-graph.png";
import Convert from "../../assets/images/non-focus-convert.png";
import Transfer from "../../assets/images/transfer-focus.png";
import Button from "../../components/Button/Button";
import LogOut from "../../assets/images/logOut.png"

const Nav = () => {
  return (
    <div className="nav">
      <div className="nav__logo">
        <Logo isTextDark={true}/>
      </div>

      <div className="nav__menu">
        <h3>Menu</h3>
        <div className="nav__button">
          <img src={Contacts} alt="contacts"></img>
          <p>Contacts</p>
        </div>
        <div className="nav__button">
          <img src={Wallet} alt="wallet"></img>
          <p>Wallet</p>
        </div>
        <div className="nav__button">
          <img src={LiveRate} alt="graph"></img>
          <p>Live rates</p>
        </div>
        <div className="nav__button">
          <img src={Convert} alt="convert"></img>
          <p>Convert</p>
        </div>
        <div className="nav__button">
          <img src={Transfer} alt="transfer"></img>
          <p>Transfer</p>
        </div>
        <div className="nav__button">
          <img src={Contacts} alt="contacts"></img>
          <p>Contacts</p>
        </div>
      </div>

      <div className="nav__logoutWrapper">
        <Button buttonClass="largeButton" buttonText="Sign Out"  />
        <img src={LogOut} alt={"logout"} />
      </div>
    </div>
  );
};

export default Nav;
