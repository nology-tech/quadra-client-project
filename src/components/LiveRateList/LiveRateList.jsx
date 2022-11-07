import "./LiveRateList.scss";
import LiveRate from "../LiveRate/LiveRate";
import Button from "../Button/Button";
const LiveRateList = () =>{
    const handleClick = () =>{
        console.log("You click on the button");
    }
    return(
        <div className="liveRateList">
            <p className="liveRateList__page">Transfer</p>
            <h1 className="liveRateList__header">View Latest Rates</h1>
            <p className="liveRateList__intro">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh sit eu sagittis. Integer amet, donec massa fermentum nunc eget netus.</p>
            <div className="liveRateList__currencies">
                <div className="liveRateList__currencies--list table">
                    <p className="table__currency">Currency</p>
                    <p className="table__amount">Amount</p>
                    <p className="table__rate">Rate</p>
                    <p className="table__align">&nbsp;</p>
                </div>
                <LiveRate name="British Pound" amount="1.00" handleClick={handleClick}/>
            </div>
            <div className="liveRateList__button">
                <Button buttonText="Add Currency" handleClick={handleClick}/>
            </div>
        </div>
    )
}

export default LiveRateList;

