import "./LiveRate.scss";
import Button from "../Button/Button";
// import GBP from "../../assets/images/gbp.png";
const LiveRate = ({
  name,
  amount = "1.00",
  rate,
  flagImage,
  handleClick,
  isCurrentCurrency = true,
}) => {
  return (
    <div className={isCurrentCurrency ? "live-rate current" : "live-rate"}>
      <div className="live-rate__currency">
        {/* <img className="live-rate__icon" src={image_url} /> */}
        {flagImage}
        <p className="live-rate__name">{name}</p>
      </div>
      <p className="live-rate__amount">{amount}</p>
      <p className="live-rate__rate">{!isCurrentCurrency && rate}</p>
      <Button
        buttonText={isCurrentCurrency ? "Edit" : "Send"}
        handleClick={handleClick}
      />
    </div>
  );
};

export default LiveRate;
