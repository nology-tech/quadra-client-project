import "./TransferConfirm.scss";
import Button from "../../components/Button/Button";
import arrow from "../../assets/images/transfer-focus-inverted.png";
import LoggedIn from "../../components/LoggedIn/LoggedIn";

const TransferConfirm = ({
  sendAmount,
  sender,
  senderAcc,
  senderSort,
  totalToSend,
  receiver,
  receiverAcc,
  receiverSort,
  fundsRem,
  rate,
  fee,
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
      <div className="receipt">
        <div className="transferForm">
          <h1 className="transferForm__head">Send From</h1>
          <div className="transferForm__inner">
            <h1 className="transferForm__user">{sender}</h1>
            <div className="transferForm__infoWrapper">
              <h2 className="transferForm__infoName">Account Number</h2>
              <p className="transferForm__infoNum">{senderAcc}</p>
            </div>
            <div className="transferForm__infoWrapper">
              <h2 className="transferForm__infoName">Sort Code</h2>
              <p className="transferForm__infoNum">{senderSort}</p>
            </div>
            <div className="transferForm__greyLine"></div>
            <div className="transferForm__totalWrapper">
              <h2 className="transferForm__total">Total</h2>
              <p className="transferForm__total transferForm__total--amount">
                {totalToSend}
              </p>
            </div>
            <div className="transferForm__remainderWrapper">
              <h2 className="transferForm__remainder">Funds Remaining</h2>
              <p className="transferForm__remainder transferForm__remainder--amount">
                {fundsRem}
              </p>
            </div>
          </div>

          <div className="transferForm">
            <h1 className="transferForm__head">To</h1>
            <div className="transferForm__inner">
              <h1 className="transferForm__user">{receiver}</h1>
              <div className="transferForm__infoWrapper">
                <h2 className="transferForm__infoName">Account Number</h2>
                <p className="transferForm__infoNum">{receiverAcc}</p>
              </div>
              <div className="transferForm__infoWrapper">
                <h2 className="transferForm__infoName">Sort Code</h2>
                <p className="transferForm__infoNum">{receiverSort}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="additionalCost">
          <div className="additionalCost__info">
            <h1 className="additionalCost__info--title">Rate</h1>
            <h1 className="additionalCost__info--value">{rate}</h1>
          </div>
          <div className="additionalCost__info">
            <h1 className="additionalCost__info--title">Fee</h1>
            <h1 className="additionalCost__info--value">{fee}</h1>
          </div>
          <div className="additionalCost__info">
            <h1 className="additionalCost__info--title">Delivery</h1>
            <h1 className="additionalCost__info--value" id="delivery">
              Typically same day
            </h1>
          </div>
        </div>
        <div className="total">
          <div className="totalContainer">
            <div className="totalContainer__toPay">
              <h2 className="totalContainer__toPay--head">Total to Pay</h2>
              <h2 className="totalContainer__toPay--value">
                £ {sendAmount + fee}
              </h2>
            </div>
            <div className="totalContainer__recipient">
              <h5>Recipient Receives</h5>
              <h5 className="totalContainer__receiveValue">
                $ {sendAmount * rate}
              </h5>
            </div>
          </div>
          <div className="additionalCost__button"></div>
        </div>
        <div className="confirm">
          <a className="confirm__cancel">Cancel</a>
          <div className="confirm__button">
            <img src={arrow} alt="transfer" />
            <Button buttonClass="largeButton" buttonText={"Send"} />
          </div>
        </div>
      </div>
    </>
  );
};

export default TransferConfirm;
