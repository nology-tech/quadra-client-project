import "./Convert.scss"
import CurrencyConverter from "../../components/currencyConverter/CurrencyConverter";


const Convert = (saveTransferDetails) => {
    
    return (
        <>
            <CurrencyConverter amount={10} toCurr={"USD"} fromCurr={"GBP"} saveTransferDetails={saveTransferDetails}/>
        </>
    )
}

export default Convert;