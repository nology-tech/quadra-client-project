import Funds from "../../components/Funds/Funds";
import Contacts from "../../components/Contacts/Contacts";
import hand from "../../assets/images/hello.svg";
import "./Wallet.scss";

const Wallet = ({ amount = "0", user}) => {
  return (
    <> 
      <div className="wallet-ctner">
        <div className="wallet-ctner__message">
          <img src={hand} alt="welcome"></img><p className="welcome__text">Hey {user.email}</p>
        </div>
        <div className="wallet-ctner__funds">
          <Funds amount={amount} isManage={true} />
        </div>
        <div className="wallet-ctner__contacts">
          <Contacts />
        </div>
      </div>
    </>
  );
};

export default Wallet;
