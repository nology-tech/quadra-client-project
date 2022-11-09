import Funds from "../../components/Funds/Funds";
import Contacts from "../../components/Contacts/Contacts";
import hand from "../../assets/images/hello.svg";
import "./Wallet.scss";
import Nav from "../Nav/Nav";

const Wallet = ({ amount = "0" }) => {
  return (
    <>
      <div className="wallet-ctner">
        <Nav />
        <div className="wallet-ctner__message">
          <p className="welcome__text">Hey User</p>
          <img src={hand} alt="welcome"></img>
        </div>
        <div className="wallet-ctner__funds">
          <Funds amount={amount} isManage={true} />
        </div>
        <div className="wallet-ctner__contacts">
          <Contacts />{" "}
        </div>
      </div>
    </>
  );
};

export default Wallet;
