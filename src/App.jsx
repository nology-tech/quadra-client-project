import "./styles/main.scss";
import CurrencyConverter from "./components/CurrencyConverter/CurrencyConverter";
import useState from "react";

const App = () => {
  const dummyCurrencyList = ["GBP", "USD", "EUR", "JPY", "ZAR", "AUD"];

  const [amount, setNewAmount] = useState([]);
  const [fromCurrency, setFromCurrency] = useState(dummyCurrencyList[0]);
  const [toCurrency, setToCurrency] = useState(dummyCurrencyList[2]);

  const handleAmountChange = (event) => { setNewAmount(event.target.value) };
  const handleFromChange = (selected) => { setFromCurrency(selected.value) };
  const handleToChange = (selected) => { setToCurrency(selected.value) };

  return (
    // <CurrencyConverter
    //   currencyList={dummyCurrencyList}
    //   amount={amount}
    //   fromCurrency={fromCurrency}
    //   toCurrency={toCurrency}
    //   handleAmountChange={handleAmountChange}
    //   handleFromChange={handleFromChange}
    //   handleToChange={handleToChange}
    //   />
    <>
    <h1>Hello</h1></>
  );
};

export default App;