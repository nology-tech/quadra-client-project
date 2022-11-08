import { useEffect, useState } from "react";
import LiveRate from "../../components/LiveRate/LiveRate";
import "./LiveRates.scss";
import { getCurrencyGBP } from "../../utils/apiUtils";

const LiveRates = () => {
  const [currRates, setCurrRates] = useState({});
  const [selectCurr, setSelectCurr] = useState(["British Pound"]);

  const getData = async () => {
    const currencies = await getCurrencyGBP();
    setCurrRates(currencies);
  };

  useEffect(() => {
    getData();
  }, []);

  const addRate = (e) => {
    if (!selectCurr.includes(e.target.value)) {
      setSelectCurr([...selectCurr, e.target.value]);
    }
    return;
  };

  const singleRate = selectCurr.map((item, i) => {
    if (i === 0) {
      return (
        <LiveRate
          name={item}
          amount={currRates[item]}
          key={i}
          isCurrentCurrency={true}
        />
      );
    } else {
      return (
        <LiveRate
          name={item}
          amount={currRates[item]}
          key={i}
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
          <div>
            <h3 id="container__head">Currency</h3>
          </div>
          <div>
            <h3 id="container__head">Amount</h3>
          </div>
          <div>
            <h3 id="container__head">Rate</h3>
          </div>
        </div>
        <div>{singleRate}</div>
      </div>
      <button onClick={addRate} value="AED">
        AED
      </button>
      <button onClick={addRate} value="USD">
        USD
      </button>
      <button onClick={addRate} value="VND">
        VND
      </button>
    </>
  );
};

export default LiveRates;
