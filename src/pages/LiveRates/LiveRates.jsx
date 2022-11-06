import { useEffect, useState } from "react";
import LiveRate from "../../components/LiveRate/LiveRate";
import "./LiveRates.scss";
import { getCurrencyGBP } from "../../utils/apiUtils";

//Plan

//1. Add in the components and styling

//2. create a mock button, so when you click on the button it will map out another componenet container.

//3. Add API call

//4. integrate the base currency to be set out in the component

// ZAIN COMMENT

const LiveRates = () => {
  const [currRates, setCurrRates] = useState({});
  const [component, setComponent] = useState(["British Pound"]);
  useEffect(() => {
    const getData = async () => {
      const currencies = await getCurrencyGBP();
      setCurrRates(currencies);
    };
    getData();
  }, []);

  console.log(currRates);

  //Button onclick gets current currency abv and adds it do constCurrency

  // Modal window

  const addRate = () => {
    setComponent([...component, "AED"]);
  };

  return (
    <div className="rates">
      <div className="rates-info">
        <h1 className="rates-info__transfer"> Transfer </h1>
        <h1 className="rates-info__heading"> View Latest Rates </h1>
        <p className="rates-info__content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim nam
          inventore deserunt id? Rem minima dolorem asperiores perferendis sed
          aspernatur. Dolorem nostrum voluptatibus dolore odit provident minima
          reiciendis dignissimos iste.
        </p>
      </div>
      <div className="rates-ctner">
        <div className="rates-ctner__title">
          <div>
            <h3 id="rates-ctner__title--head">Currency</h3>
          </div>
          <div>
            <h3 id="rates-ctner__title--head">Amount</h3>
          </div>
          <div>
            <h3 id="rates-ctner__title--head">Rate</h3>
          </div>
          <div></div>
          <div> </div>
          <div></div>
        </div>
        <div>{component.map((item, i) => ( <LiveRate name={item} amount={"1.00"} key={i} /> ))} </div> 
      </div>
      <button onClick={addRate}>Add</button>
    </div>
  );
};
/*
transactionId: any;
    senderAmount: any;
    payeeAmount: any;
    rate: any;
    date: any;
*/

export default LiveRates;
