import React from "react";
import { Dropdown } from 'rsuite';
import iconMap from "../../utils/currencyIcons";
import Button from "../Button/Button";
import altConvert from "../../assets/images/alternate-convert.png";

import "./CurrencyConverter.scss";


const CurrencyConverter = ({currencyList, amount, fromCurrency, toCurrency, setNewAmount, setFromCurrency, setToCurrency}) => {
    const fromOptions = currencyList.map(currency => <Dropdown.Item key={currency} icon={iconMap[currency]}>{currency}</Dropdown.Item>);
    const toOptions = currencyList.filter(currency => currency !== fromCurrency).map(currency => <Dropdown.Item key={currency} icon={iconMap[currency]}>{currency}</Dropdown.Item>);

    const handleAmountChange = (event) => setNewAmount(event.target.value);
    const handleFromChange = (eventKey, event) => {
        const newFromCurrency = event.target.textContent;
        if (toCurrency == newFromCurrency) {
            setToCurrency(currencyList.find(currency => currency != newFromCurrency));
        }
        setFromCurrency(newFromCurrency);
    };
    const handleToChange = (eventKey, event) => setToCurrency(event.target.textContent);

    return (
        <div className="convertBox">
            <div className="convertBox__amount">
                <label id="test">Amount</label>
                <input
                    type="text"
                    placeholder="£10"
                    onChange={handleAmountChange}
                    value={amount}
                />
                <div className="convertBox__button">
                    <img src={altConvert} alt="convertLogo" />
                    <Button buttonText={"Convert"}/>
                </div>
            </div>
            
            <div className="convertBox__options">                
                <h3>From</h3>                
                <Dropdown  className="convertBox__currency" id="menubutton" title={fromCurrency} icon={iconMap[fromCurrency]} onSelect={handleFromChange} value={fromCurrency}>
                    {fromOptions}
                </Dropdown>
                <div>
                    <Button />
                </div>
                <h3>To</h3>
                <Dropdown className="convertBox__currency" id="menubutton" title={toCurrency} icon={iconMap[toCurrency]} onSelect={handleToChange}>
                    {toOptions}
                </Dropdown>
                
            </div>
        </div>
    );
}


export default CurrencyConverter;
