import "./Transfer.scss";
import Button from "../../components/Button/Button";
import { Link } from "react-router-dom";
import LoggedIn from "../../components/LoggedIn/LoggedIn";
const Transfer = ({
  fee = 0.0,
  transferDetails: { fromCurr, fromAmt, toCurr, toAmt, transferRate },
}) => {
  return (
    <>
      <div className="logged-in-container">
        <LoggedIn />
      </div>
      <div className="transfer-info">
        <h1 className="transfer-info__transfer"> Transfer </h1>
        <h1 className="transfer-info__heading"> Make Transfer </h1>
        <p className="transfer-info__content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim nam
          inventore deserunt id? Rem minima dolorem asperiores perferendis sed
          aspernatur. Dolorem nostrum voluptatibus dolore odit provident minima
          reiciendis dignissimos iste.
        </p>
      </div>
      <div className="transferReceipt">
        <h1 className="transferReceipt__head">You Send</h1>
        <div className="transferReceipt__box">
          <h2 className="transferReceipt__currency">{fromCurr}</h2>
          <h2 className="transferReceipt__currency">{fromAmt}</h2>
        </div>
        <h1 className="transferReceipt__head">Recipient gets</h1>
        <div className="transferReceipt__box">
          <h2 className="transferReceipt__currency">{toCurr}</h2>
          <h2 className="transferReceipt__currency">{toAmt}</h2>
        </div>

        <div className="transferReceipt__body">
          <div className="transferReceipt__body__info">
            <h1 className="transferReceipt__body__info--title">Rate</h1>
            <h1 className="transferReceipt__body__info--value">
              {transferRate}
            </h1>
          </div>
          <div className="transferReceipt__body__info">
            <h1 className="transferReceipt__body__info--title">Fee</h1>
            <h1 className="transferReceipt__body__info--value">{fee}</h1>
          </div>
          <div className="transferReceipt__body__info">
            <h1 className="transferReceipt__body__info--title">Delivery</h1>
            <h1 className="transferReceipt__body__info--value" id="delivery">
              Typically same day
            </h1>
          </div>
        </div>
        <div className="transferReceipt__bottom">
          <div className="transferReceipt__bottom__box">
            <h1 className="transferReceipt__bottom__box--info">Total</h1>
            <h1 className="transferReceipt__bottom__box--end">
              {Number(fromAmt) + Number(fee)}
            </h1>
          </div>
          <div className="transferReceipt__button">
            <Link to={"/transfer/recipient"}>
              {" "}
              <Button buttonClass="largeButton" buttonText={"Continue"} />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Transfer;
