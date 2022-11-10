import "./ConversionResult.scss";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import { useEffect } from "react";


/**
 * Props for Conversion Result (Scroll down in the rollover to see all).
 * @amount Amount of money in fromCurrency.
 * @fromCurrency The name of the currency being converted from.
 * @fromCode The abbreviation for the currency being converted from.
 * @toCurrency The name of the currency being converted to.
 * @toCode The abreviation for the currency being converted to.
 * @rate The covnersion rate between fromCurrency and toCurrency (Not the other way around).
 * @date The Date element from the Exchage Rates return for fromCurrency.
 * @handleClick The function to be run when the "Make Transfer" button is clicked.
 */
const ConversionResult = ({
  amount,
  fromCurrency,
  toCurrency,
  rate,
  date,
  handleClick,
  saveTransferDetails}) => {

  const toAmount = amount * rate;
  const transferDetails = {fromCurr:fromCurrency,
    fromAmt:amount,
    toCurr:toCurrency,
    toAmt:toAmount,
    transferRate:rate
  }

  useEffect(() => {
    saveTransferDetails.saveTransferDetails(transferDetails);
  }, []);
  
  useEffect(() => {
    saveTransferDetails.saveTransferDetails(transferDetails);
  }, [ amount,fromCurrency,toCurrency,rate]);

  return (
    <div className="currencies">
      <div className="currencies__display">
        <h5 className="currencies__source">{`${amount} ${fromCurrency} =`}</h5>
        <h2 className="currencies__target">{`${
          toAmount
        } ${toCurrency}`}</h2>
        <p className="currencies__code">{`1 ${fromCurrency} = ${rate} ${toCurrency}`}</p>
        <p className="currencies__code">{`1 ${toCurrency} = ${
          1 / rate
        } ${fromCurrency}`}</p>
      </div>
      <div className="currencies__makeTransfer">
      <Link to={`/transfer`}>
        <Button
          buttonClass="invertedButton"
          buttonText="Make Transfer"
          handleClick={handleClick}
        />
        </Link>
        <p className="currencies__updateTransfer">{`${fromCurrency} to ${toCurrency} conversion -- Last Updated ${date}`}</p>
      </div>
    </div>
  );
};

export default ConversionResult;
