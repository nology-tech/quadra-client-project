import React from "react";
import { Dropdown } from 'rsuite';
import iconMap from "../../utils/currencyIcons";
import Button from "../Button/Button";
import altConvert from "../../assets/images/alternate-convert.png";
import Convert from "../../assets/images/convert-green.png"

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
        <h3 id="header__amount">Amount</h3>
        <h3 id="header__from">From</h3>
        <h3 id="header__to">To</h3>

        <input  
            id="input__amount"
            type="number"
            placeholder="10.00"
            onChange={handleAmountChange}
            value={amount}/>
            
        <div className="input__from">
            <Dropdown  id="from" title={fromCurrency} icon={iconMap[fromCurrency]} onSelect={handleFromChange} value={fromCurrency}>
                        {fromOptions}
            </Dropdown>
        </div>

        <div className="convertBox__btn">
            <img  id="convert" src={Convert} alt="" />
        </div>
        
        <div className="input__to">
            <Dropdown  id="to" title={toCurrency} icon={iconMap[toCurrency]} onSelect={handleToChange}>
                {toOptions}
            </Dropdown>
        </div>

        <div className="convertBox__button">
            <img src={altConvert} alt="convertLogo" />
            <Button className="convert__button" buttonText={"Convert"}/>
        </div>
        
    </div>
    );
}


export default CurrencyConverter;
