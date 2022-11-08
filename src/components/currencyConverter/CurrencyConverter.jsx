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
    <div className="converter"> 
        <h3 id="converter__amount">Amount</h3>
        <h3 id="converter__from">From</h3>
        <h3 id="converter__to">To</h3>

        <input  
            id="converter__input"
            type="number"
            placeholder="10.00"
            onChange={handleAmountChange}
            value={amount}/>
            
        <div className="converter__source">
            <Dropdown  id="converter__sourceInput" title={fromCurrency} icon={iconMap[fromCurrency]} onSelect={handleFromChange} value={fromCurrency}>
                        {fromOptions}
            </Dropdown>
        </div>

        <div className="converter__button">
            <img  id="converter__image" src={Convert} alt="" />
        </div>
        
        <div className="converter__target">
            <Dropdown  id="converter__targetInput" title={toCurrency} icon={iconMap[toCurrency]} onSelect={handleToChange}>
                {toOptions}
            </Dropdown>
        </div>

        <div className="converter__submitWrapper">
            <img src={altConvert} alt="convertLogo" />
            <Button classNaming="largeButton" buttonText={"Convert"}/>
        </div>
        
    </div>
    );
}


export default CurrencyConverter;
