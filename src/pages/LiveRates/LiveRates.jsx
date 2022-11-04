import { useEffect, useState } from "react";

import "./LiveRates.scss";

//Plan

//1. Add in the components and styling

//2. create a mock button, so when you click on the button it will map out another componenet container.

//3. Add API call

//4. integrate the base currency to be set out in the component

// ZAIN COMMENT

const LiveRates = () => {
  const getCurrency = async () => {
    // This is default url
    const url =
      "https://money-app-api-oi3xuie5la-nw.a.run.app/quadra-money/v1/currencies/gbp";

    const res = await fetch(url);
    const data = await res.json();

    // console.log(data);
    console.log("This is USD ", data.rates.USD);
    console.log("This is USD ", data.rates.USD);

    // console.log("this is data and name", data[0].name);
  };

  useEffect(() => {
    getCurrency();
  }, []);

  //Button onclick gets current currency abv and adds it do constCurrency

  // Modal window

  // const addCurrency = () => {};

  return (
    <div>
      <h1> Transfer </h1>
      <h1> View Latest Rates </h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim nam
        inventore deserunt id? Rem minima dolorem asperiores perferendis sed
        aspernatur. Dolorem nostrum voluptatibus dolore odit provident minima
        reiciendis dignissimos iste.
      </p>
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
