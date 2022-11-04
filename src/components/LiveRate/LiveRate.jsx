import "./LiveRate.scss";
import Button from "../Button/Button"

const LiveRate = ({name, amount, rate="0.0037", image_url="../assets/images/credit-card.png", handleClick, isCurrentCurrency=false}) => {
    return (
        <div className={isCurrentCurrency ? "live-rate current" : "live-rate"}>
            <div className="live-rate__currency">
                <img className="live-rate__icon" src={image_url}/>
                <p className="live-rate__name">{name} name</p>
            </div>
            <p className="live-rate__amount">{amount} 1.3595</p>
            <p className="live-rate__rate">{!isCurrentCurrency && rate}</p>
            <Button buttonText={isCurrentCurrency ? "Edit" : "Send"} handleClick={handleClick} />
        </div>
    )
}

export default LiveRate;