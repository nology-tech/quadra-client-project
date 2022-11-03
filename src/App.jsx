// import { Route, Routes } from "react-router-dom";
// import Home from "./pages/Home/Home";

import CurrencyConverter from "./components/CurrencyConverter/CurrencyConverter";
import {useState} from "react";

import "./styles/main.scss";

const App = () => {
  const dummyCurrencyList = ["GBP", "USD", "EUR", "JPY", "ZAR", "AUD"];

  const [amount, setNewAmount] = useState(10);
  const [fromCurrency, setFromCurrency] = useState(dummyCurrencyList[0]);
  const [toCurrency, setToCurrency] = useState(dummyCurrencyList[2]);

  return (    
    // <Routes>
    //   <Route path="*" element={<Home />} />
    // </Routes>
    <CurrencyConverter
      currencyList={dummyCurrencyList}
      amount={amount}
      fromCurrency={fromCurrency}
      toCurrency={toCurrency}
      setNewAmount={setNewAmount}
      setFromCurrency={setFromCurrency}
      setToCurrency={setToCurrency}
      />
  );
};

export default App;
