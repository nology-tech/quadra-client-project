import "./Nav.scss";
import "../../styles/_variables.scss";
import Logo from "../../components/Logo/Logo";
import Logout from "../../assets/images/logout.svg";
import Button from "../../components/Button/Button";
import { getAuth, signOut } from "firebase/auth";
import { NavLink, useNavigate } from "react-router-dom";

const Nav = ({ clearUser }) => {
  const logoutUser = () => {
    signOut(auth)
      .then(() => {
        clearUser("");
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const auth = getAuth();
  const navigate = useNavigate();

  return (
    <div className="nav">
      <div className="nav__logo">
        <Logo isTextDark={true} />
      </div>
      <div className="nav__menu">
        <h3>Menu</h3>
        <NavLink
          className={({ isActive }) =>
            isActive ? "walletActive" : "walletInactive"
          }
          to={"/wallet"}
        >
          Wallet
        </NavLink>
        <NavLink
          to={"/liverates"}
          className={({ isActive }) =>
            isActive ? "rateActive" : "rateInactive"
          }
        >
          Live rates
        </NavLink>
        <NavLink
          to={`/convert`}
          className={({ isActive }) =>
            isActive ? "convertActive" : "convertInactive"
          }
        >
          Convert
        </NavLink>
        <NavLink
          to={`/contacts`}
          className={({ isActive }) =>
            isActive ? "contactActive" : "contactInactive"
          }
        >
          Contacts
        </NavLink>
      </div>
      <div className="nav__logoutWrapper">
        <Button
          buttonClass="largeButton"
          buttonText="Sign Out"
          handleClick={logoutUser}
        />
        <img src={Logout} alt="logout" />
      </div>
    </div>
  );
};

export default Nav;
