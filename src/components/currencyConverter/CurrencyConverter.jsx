import "./CurrencyConverter.scss";
import imageMap from "../../utils/currencyIcons";
import Select from 'react-select';

const CurrencyConverter = ({currencyList, amount, fromCurrency, toCurrency, setNewAmount, setFromCurrency, setToCurrency}) => {
    
    const handleAmountChange = (event) => setNewAmount(event.target.value);
    const handleFromChange = (selected) => {
        const newFromCurrency = selected.value;
        if (toCurrency == newFromCurrency) {
            setToCurrency(currencyList.find(currency => currency != newFromCurrency));
        }
        setFromCurrency(newFromCurrency);
    };
    const handleToChange = (selected) => setToCurrency(selected.value);

    const fromOptions = currencyList.map(currency => ({ value: currency, label: currency }));
    const toOptions = currencyList.filter(currency => currency !== fromCurrency).map(currency => ({ value: currency, label: currency }));
    const fromOption = fromOptions.find(option => option.value == fromCurrency);
    const toOption = toOptions.find(option => option.value == toCurrency);

    const icon = (currency) => ({
        alignItems: 'center',
        display: 'flex',

        ':before': {
            backgroundImage: "url(" + imageMap[currency] + ")",
            content: '""',
            display: 'block',
            marginRight: 8,
            height: '19px',
            width: '25px',
        },
    });

    const currencyStyles = {
        option: (styles, { data }) => ({ ...styles, ...icon(data.value) }),
        singleValue: (styles, { data }) => ({ ...styles, ...icon(data.value) }),
    };

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
            </div>
            <div className="convertBox__from">
                <label>From</label>
                <Select
                    value={fromOption}
                    onChange={handleFromChange}
                    className="convertBox__dropdown"
                    options={fromOptions}
                    styles={currencyStyles}
                />
            </div>
            <div className="convertBox__to">
                <label>To</label>
                <Select
                    value={toOption}
                    onChange={handleToChange}
                    className="convertBox__dropdown"
                    options={toOptions}
                    styles={currencyStyles}
                />
            </div>
        </div>
    );
}


export default CurrencyConverter;