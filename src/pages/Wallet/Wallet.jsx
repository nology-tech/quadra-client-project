import Funds from "../../components/Funds/Funds";
import hand from "../../assets/images/hello.svg";
import "./Wallet.scss";
import LoggedIn from "../../components/LoggedIn/LoggedIn";
import ContactContent from "../../components/ContactContent/ContactContent";
import { getUserHoldings } from "../../utils/apiUtils";
import { storeUserHoldings } from "../../utils/apiUtils";

const Wallet = ({user}) => {

  storeUserHoldings(user.uid, "British Pound Sterling", Math.floor(Math.random() * 10000), "GBP", "£");
  const amount = getUserHoldings(user.uid); 

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
