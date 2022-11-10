import "./Nav.scss";
import Logo from "../../components/Logo/Logo";
import Contacts from "../../assets/images/non-focus-contacts.png";
import Wallet from "../../assets/images/non-focus-wallet.png";
import LiveRate from "../../assets/images/non-focus-graph.png";
import Convert from "../../assets/images/non-focus-convert.png";
import Transfer from "../../assets/images/transfer-focus.png";
import Logout from "../../assets/images/logout.svg";
import Button from "../../components/Button/Button";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Nav = ({clearUser}) => {

  const logoutUser = () => {
    signOut(auth).then(() => {
      clearUser("");
      navigate("/");
    }).catch((error) => { 
      console.error(error);  
    });
  }

  const auth = getAuth();
  const navigate = useNavigate();

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
        <Button buttonClass="largeButton" buttonText="Sign Out" handleClick={logoutUser}/>
        <img src={Logout} alt="logout" />
      </div>
    </div>
  );
};

export default Nav;
