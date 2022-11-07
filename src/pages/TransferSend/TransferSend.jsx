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
      <div className="form">
        <h1 className="form__head">Send From</h1>
        <div className="form__inner">
          <h1 className="form__inner__user">{user}</h1>
          <div className="form__inner__account">
            <h2 className="form__inner__account--name">Account Number</h2>
            <p className="form__inner__account--entered">{accNum}</p>
          </div>
          <div className="form__inner__sort">
            <h2 className="form__inner__sort--name">Sort Code</h2>
            <p className="form__inner__sort--entered">{sortCode}</p>
          </div>
          <div className="form__inner__grey-line"></div>
          <div className="form__inner__total">
            <h2 className="form__inner__total--name">Total</h2>
            <p className="form__inner__total--amount">{total}</p>
          </div>
          <div className="form__inner__remainder">
            <h2 className="form__inner__remainder--name">Funds Remaining</h2>
            <p className="form__inner__remainder--amount">{fundsRem}</p>
          </div>
        </div>
        <div className="form__send">
          <h1 className="form__send__to">To</h1>
          <div className="form__send__buttons">
            <div className="form__send__buttons--select">
              <Button buttonText="Select Recipient" />
            </div>
            <div className="form__send__buttons--new" onClick={buttonPress}>
              <img src={Plus} alt="plus" id="form__send__buttons--new--img" />
              <p>Pay someone new</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TransferSend;
