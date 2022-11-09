import "./ConversionResult.scss";
import Button from "../Button/Button";

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
  // fromCode,
  toCurrency,
  // toCode,
  rate,
  date,
  handleClick
}) => {
  return (
    <div className="currencies">
      <div className="currencies__display">
        <h5 className="currencies__source">{`${amount} ${fromCurrency} =`}</h5>
        <h2 className="currencies__target">{`${
          amount * rate
        } ${toCurrency}`}</h2>
        <p className="currencies__code">{`1 ${fromCurrency} = ${rate} ${toCurrency}`}</p>
        <p className="currencies__code">{`1 ${toCurrency} = ${
          1 / rate
        } ${fromCurrency}`}</p>
      </div>
      <div className="currencies__makeTransfer">
        <Button
          buttonClass="invertedButton"
          buttonText="Make Transfer"
          handleClick={handleClick}
        />
        <p className="currencies__updateTransfer">{`${fromCurrency} to ${toCurrency} conversion -- Last Updated ${date}`}</p>
      </div>
    </div>
  );
};

export default ConversionResult;
