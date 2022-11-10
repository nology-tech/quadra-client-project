import { useEffect, useState } from "react";
import LiveRate from "../../components/LiveRate/LiveRate";
import "./LiveRates.scss";
import { getCurrencyGBP } from "../../utils/apiUtils";
import iconMap from "../../utils/currencyIcons";
import { Dropdown } from "rsuite";
import Button from "../../components/Button/Button";

const LiveRates = () => {
  const [currRates, setCurrRates] = useState({});
  const [selectCurr, setSelectCurr] = useState(["GBP"]);
  const [dropdownCurr, setDropdownCurr] = useState("GBP");
  const newCurrencies = Object.keys(iconMap);
  const newCurrencyOptions = newCurrencies.map((currency) => (
    <Dropdown.Item className="dropdown-container__dropdown-item" key={currency}>
      {currency}
    </Dropdown.Item>
  ));

  const getData = async () => {
    const currencies = await getCurrencyGBP();
    setCurrRates(currencies);
  };

  useEffect(() => {
    getData();
  }, []);

  const addRate = () => {
    if (!selectCurr.includes(dropdownCurr)) {
      setSelectCurr([...selectCurr, dropdownCurr]);
    }
    return;
  };

  const changeSelectedCurrency = (eventKey, event) => {
    setDropdownCurr(event.target.textContent);
  };

  const singleRate = selectCurr.map((item, i) => {
    if (i === 0) {
      return (
        <LiveRate
          name={item}
          amount={currRates[item]}
          key={i}
          rate={"+0.01%"}
          flagImage={iconMap[item]}
          isCurrentCurrency={true}
        />
      );
    } else {
      return (
        <LiveRate
          name={item}
          amount={currRates[item]}
          key={i}
          rate={"+0.01%"}
          flagImage={iconMap[item]}
          isCurrentCurrency={false}
        />
      );
    }
  });

  return (
    <>
      <div className="info">
        <h1 className="info__transfer"> Transfer </h1>
        <h1 className="info__heading"> View Latest Rates </h1>
        <p className="info__content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim nam
          inventore deserunt id? Rem minima dolorem asperiores perferendis sed
          aspernatur. Dolorem nostrum voluptatibus dolore odit provident minima
          reiciendis dignissimos iste.
        </p>
      </div>
      <div className="container">
        <div className="container__title">
          <h3 className="container__head container__head--currency">
            Currency
          </h3>
          <h3 className="container__head container__head--amount">Amount</h3>
          <h3 className="container__head container__head--rate">Rate</h3>
        </div>
        {singleRate}
      </div>

      <div className="dropdown-container">
        <Dropdown
          title={dropdownCurr}
          icon={iconMap[dropdownCurr]}
          onSelect={changeSelectedCurrency}
          value={dropdownCurr}
        >
          {newCurrencyOptions}
        </Dropdown>
        <div className="dropdown-container__button">
          <Button
            buttonClass={"addCurrency"}
            buttonText={"Add Currency"}
            handleClick={addRate}
          />
        </div>
      </div>
    </>
  );
};

export default LiveRates;
