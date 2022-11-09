import React from "react";
import { Dropdown } from "rsuite";
import { useState, useEffect } from "react";
import iconMap from "../../utils/currencyIcons";
import Button from "../Button/Button";
import altConvert from "../../assets/images/alternate-convert.png";
import Convert from "../../assets/images/convert-green.png";
import "./CurrencyConverter.scss";
import ConversionResult from "../ConversionResult/ConversionResult";
import { getCurrency } from "../../utils/apiUtils";

const CurrencyConverter = ({
  currencyList = Object.keys(iconMap),
  amount,
  fromCurr,
  toCurr
}) => {
  const [newAmount, setNewAmount] = useState(amount);
  const [fromCurrency, setFromCurrency] = useState(fromCurr);
  const [toCurrency, setToCurrency] = useState(toCurr);
  const [rate, setRate] = useState();
  const date = new Date();
  useEffect(() => {
    getRate();
  }, []);


  useEffect(() => {
    getRate();
  }, [fromCurrency,toCurrency]);

  const getRate = async () => {
    const newRate = await getCurrency(fromCurrency);
    setRate(newRate[toCurrency]);
  }

  const fromOptions = currencyList.map((currency) => (
    <Dropdown.Item key={currency} icon={iconMap[currency]}>
      {currency}
    </Dropdown.Item>
  ));
  const toOptions = currencyList
    .filter((currency) => currency !== fromCurrency)
    .map((currency) => (
      <Dropdown.Item key={currency} icon={iconMap[currency]}>
        {currency}
      </Dropdown.Item>
    ));
  const handleAmountChange = (event) => {
    if (event.target.value >= 0) {
        setNewAmount(event.target.value);
    }
}
  const handleFromChange = (eventKey, event) => {
    const newFromCurrency = event.target.textContent;
    if (toCurrency == newFromCurrency) {
      setToCurrency(
        currencyList.find((currency) => currency != newFromCurrency)
      );
    }
    setFromCurrency(newFromCurrency);
  };
  const handleToChange = (eventKey, event) =>
    setToCurrency(event.target.textContent);

  return (
    <>
    <div className="converter">
      <h3 id="converter__amount">Amount</h3>
      <h3 id="converter__from">From</h3>
      <h3 id="converter__to">To</h3>

      <input
        id="converter__input"
        type="number"
        onChange={handleAmountChange}
        value={newAmount}
      />

      <div className="converter__source">
        <Dropdown
          id="converter__sourceInput"
          title={fromCurrency}
          icon={iconMap[fromCurrency]}
          onSelect={handleFromChange}
          value={fromCurrency}
        >
          {fromOptions}
        </Dropdown>
      </div>

      <div className="converter__button">
        <img id="converter__image" src={Convert} alt="" />
      </div>

      <div className="converter__target">
        <Dropdown
          id="converter__targetInput"
          title={toCurrency}
          icon={iconMap[toCurrency]}
          onSelect={handleToChange}
        >
          {toOptions}
        </Dropdown>
      </div>

      <div className="converter__submitWrapper">
        <img src={altConvert} alt="convertLogo" />
        <Button buttonClass="largeButton" buttonText={"Convert"} />
      </div>
    </div>
      <ConversionResult amount={newAmount} fromCurrency={fromCurrency} toCurrency={toCurrency} rate={rate} date={date.getFullYear()} handleClick={handleFromChange}/>
      </>
  );
};

export default CurrencyConverter;
