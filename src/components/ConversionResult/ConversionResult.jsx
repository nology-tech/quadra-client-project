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
const ConversionResult = ({ amount, fromCurrency, fromCode, toCurrency, toCode, rate, date, handleClick }) => {

    return (
        <div className="display">
            <div className="display__currencies">
                <h5 className="display__currencies--from">{`${amount} ${fromCurrency} =`}</h5>
                <h2 className="display__currencies--to">{`${amount * rate} ${toCurrency}`}</h2>
                <p className="display__currencies--code">{`1 ${fromCode} = ${rate} ${toCode}`}</p>
                <p className="display__currencies--code">{`1 ${toCode} = ${1/rate} ${fromCode}`}</p>
            </div>
            <div className="display__makeTransfer">
                <Button buttonText="Make Transfer" handleClick={handleClick}/>
                <p className="display__makeTransfer--update">{`${fromCurrency} to ${toCurrency} conversion -- Last Updated ${date}`}</p>
            </div>
        </div>
    )
}

export default ConversionResult;