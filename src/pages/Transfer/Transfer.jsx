import "./Transfer.scss";
import Button from "../../components/Button/Button";
const Transfer = ({
  sendCurr = "GBP - British Pounds",
  sendAmount = "£1000.00",
  recCurr = "USD - US Dollars",
  recAmount = "$1359.50",
  rate = 1.3595,
  fee = "£0.00",
}) => {
  return (
    <>
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
      <div className="receipt">
        <h1 className="receipt__head">You Send</h1>
        <div className="receipt__box">
          <h2 className="receipt__currency">{sendCurr}</h2>
          <h2 className="receipt__currency">{sendAmount}</h2>
        </div>
        <h1 className="receipt__head">Recipient gets</h1>
        <div className="receipt__box">
          <h2 className="receipt__currency">{recCurr}</h2>
          <h2 className="receipt__currency">{recAmount}</h2>
        </div>

        <div className="receipt__body">
          <div className="receipt__body__info">
            <h1 className="receipt__body__info--title">Rate</h1>
            <h1 className="receipt__body__info--value">{rate}</h1>
          </div>
          <div className="receipt__body__info">
            <h1 className="receipt__body__info--title">Fee</h1>
            <h1 className="receipt__body__info--value">{fee}</h1>
          </div>
          <div className="receipt__body__info">
            <h1 className="receipt__body__info--title">Delivery</h1>
            <h1 className="receipt__body__info--value" id="delivery">
              Typically same day
            </h1>
          </div>
        </div>
        <div className="receipt__bottom">
          <div className="receipt__bottom__box">
            <h1 className="receipt__bottom__box--info">Total</h1>
            <h1 className="receipt__bottom__box--end">{sendAmount}</h1>
          </div>
          <div className="receipt__button">
            <Button buttonText={"Continue"} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Transfer;
