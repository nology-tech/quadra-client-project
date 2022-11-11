import Funds from "../../components/Funds/Funds";
import hand from "../../assets/images/hello.svg";
import "./Wallet.scss";
import LoggedIn from "../../components/LoggedIn/LoggedIn";
import ContactContent from "../../components/ContactContent/ContactContent";
import { getUserHoldings } from "../../utils/apiUtils";
import { storeUserHoldings } from "../../utils/apiUtils";

const Wallet = ({ amount = "0", user}) => {

  storeUserHoldings(user.uid, currencyName="British Pound Sterling", amount=Math.random())

  return (
    <div className="wallet">
        <div className="wallet__user">
          <LoggedIn />
        </div>
        <div className="wallet__message">
          <p className="welcome__text">Hey {user.email}</p><img src={hand} alt="welcome"></img>
        </div>
        <div className="wallet__funds">
          <Funds amount={amount} isManage={true} />
        </div>
        <div className="wallet__contacts">
          <ContactContent />
        </div>
    </div>
  );
};

export default Wallet;
