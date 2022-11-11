import Funds from "../../components/Funds/Funds";
import hand from "../../assets/images/hello.svg";
import "./Wallet.scss";
import LoggedIn from "../../components/LoggedIn/LoggedIn";
import ContactContent from "../../components/ContactContent/ContactContent";

const Wallet = ({ amount = "0", user}) => {
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
          <ContactContent isWallet={true} userId={user.uid}/>
        </div>
    </div>
  );
};

export default Wallet;
