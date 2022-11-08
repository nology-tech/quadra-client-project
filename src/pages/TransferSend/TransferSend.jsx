import "./TransferSend.scss";
// import LoggedIn from "../../components/LoggedIn/LoggedIn";
import Button from "../../components/Button/Button";
import Plus from "../../assets/images/plus.png";
const TransferSend = ({
  user = "Sam",
  accNum = "123",
  sortCode = "000",
  total = "£100.00",
  fundsRem = "£1",
}) => {
  /*
    { name, accNum, code, total, fundsRem }
  */
  const buttonPress = () => {
    alert("button has been pressed");
  };

  return (
    <>
      <div className="info">
        <h1 className="info__transfer"> Transfer </h1>
        <h1 className="info__heading"> View Latest Rates </h1>
        <p className="info__content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim nam
          inventore deserunt id? Rem minima dolorem asperiores perferendis sed
          aspernatur. Dolorem nostrum voluptatibus dolore odit provident minima
          reiciendis dignissimos iste.
        </p>
      </div>
      <div className="transferForm">
        <h1 className="transferForm__head">Send From</h1>
        <div className="transferForm__inner">
          <h1 className="transferForm__user">{user}</h1>
          <div className="transferForm__infoWrapper">
            <h2 className="transferForm__infoName">Account Number</h2>
            <p className="transferForm__infoNum">{accNum}</p>
          </div>
          <div className="transferForm__infoWrapper">
            <h2 className="transferForm__infoName">Sort Code</h2>
            <p className="transferForm__infoNum">{sortCode}</p>
          </div>
          <div className="transferForm__greyLine"></div>
          <div className="transferForm__totalWrapper">
            <h2 className="transferForm__total">Total</h2>
            <p className="transferForm__total transferForm__total--amount">{total}</p>
          </div>
          <div className="transferForm__remainderWrapper">
            <h2 className="transferForm__remainder">Funds Remaining</h2>
            <p className="transferForm__remainder transferForm__remainder--amount">{fundsRem}</p>
          </div>
        </div>
        <div className="transferForm__sendWrapper">
          <h1 className="transferForm__head">To</h1>
          <div className="transferForm__buttons">
            <div className="transferForm__select">
              <Button buttonText="Select Recipient" />
            </div>
            <div className="transferForm__new" onClick={buttonPress}>
              <img src={Plus} alt="plus" />
              <p>Pay someone new</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TransferSend;