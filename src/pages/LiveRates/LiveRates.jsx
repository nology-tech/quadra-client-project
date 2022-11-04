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
  useEffect(() => {
    const getData = async () => {
      const currencies = await getCurrencyGBP();
      setCurrRates(currencies);
    };
    getData();
  }, []);

  console.log(currRates.AED);

  //Button onclick gets current currency abv and adds it do constCurrency

  // Modal window

  // const addCurrency = () => {};

  return (
    <div className="rates">
      <div className="rates-info">
        <h1 className="rates-info__transfer"> Transfer </h1>
        <h1 id="latest-rates"> View Latest Rates </h1>
        <p className="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim nam
          inventore deserunt id? Rem minima dolorem asperiores perferendis sed
          aspernatur. Dolorem nostrum voluptatibus dolore odit provident minima
          reiciendis dignissimos iste.
        </p>
      </div>
      <div className="rates-ctner">
        <div className="rates-ctner__title">
          <h3>Currency</h3>
          <h3>Amount</h3>
          <h3>Rate</h3>
        </div>
        <LiveRate name="British Pound" amount="1.00" />
      </div>
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
