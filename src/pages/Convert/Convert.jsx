import "./Convert.scss";
import LoggedIn from "../../components/LoggedIn/LoggedIn";
import Funds from "../../components/Funds/Funds";
import CurrencyConverter from "../../components/CurrencyConverter/CurrencyConverter";
import LiveRate from "../../components/LiveRate/LiveRate";
import Button from "../../components/Button/Button";


const Convert = (saveTransferDetails) => {
    
    return (
        <section className="convert">
            <div className="convert__user">
                <LoggedIn/>
            </div>
            <h6 className="convert__small">Convert</h6>
            <h2 className="convert__title">Currency Converter</h2>
            <p className="convert__intro">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh sit eu sagittis. Integer amet, donec massa fermentum nunc eget netus.</p>
            <div className="convert__wrapper">
                <div className="convert__funds">
                    <Funds amount={12342} isManage={false}/>
                </div>
                <div className="convert__converterBox">
                    <CurrencyConverter 
                        amount={10} 
                        toCurr={"USD"} 
                        fromCurr={"GBP"} 
                        saveTransferDetails={saveTransferDetails}
                    />
                </div>
            </div>
            <h2 className="convert__title">View Latest Rates</h2>
            <p className="convert__intro">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh sit eu sagittis. Integer amet, donec massa fermentum nunc eget netus.</p>
            <div className="convert__liveRateHeading">
                <h6 className="convert__currency">Currency</h6>
                <h6 className="convert__amount">Amount</h6>
                <h6 className="convert__rate">Rate</h6>
            </div>
            <LiveRate />
            <div className="convert__addCurrency">
                <Button 
                    buttonText={"Add currency"} 
                    buttonClass={"addCurrency"}
                />
            </div>
        </section>
    )
}

export default Convert;