import { useEffect, useState } from "react";
import LiveRate from "../../components/LiveRate/LiveRate";
import "./LiveRates.scss";
import { getCurrencyGBP } from "../../utils/apiUtils";

const LiveRates = () => {
  const [currRates, setCurrRates] = useState({});
  const [selectCurr, setSelectCurr] = useState(["British Pound"]);

  useEffect(
    () => {
      const getData = async () => {
        const currencies = await getCurrencyGBP();
        setCurrRates(currencies);
      };
      getData();
    },
    [],
    selectCurr
  );

  const addRate = (e) => {
    if (!selectCurr.includes(e.target.value)) {
      setSelectCurr([...selectCurr, e.target.value]);
    }
    return;
  };

  return (
    <div className="rates">
      <div className="rates-info">
        <h1 className="rates-info__transfer"> Transfer </h1>
        <h1 className="rates-info__heading"> View Latest Rates </h1>
        <p className="rates-info__content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim nam
          inventore deserunt id? Rem minima dolorem asperiores perferendis sed
          aspernatur. Dolorem nostrum voluptatibus dolore odit provident minima
          reiciendis dignissimos iste.
        </p>
      </div>
      <div className="rates-ctner">
        <div className="rates-ctner__title">
          <div>
            <h3 id="rates-ctner__title--head">Currency</h3>
          </div>
          <div>
            <h3 id="rates-ctner__title--head">Amount</h3>
          </div>
          <div>
            <h3 id="rates-ctner__title--head">Rate</h3>
          </div>
          <div></div>
          <div> </div>
          <div></div>
        </div>
        <div>
          {selectCurr.map((item, i) => (
            <LiveRate name={item} amount={currRates[item]} key={i} />
          ))}
        </div>
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
    </div>
  );
};

export default LiveRates;
