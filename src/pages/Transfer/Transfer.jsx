import "./Transfer.scss";

const Transfer = ({
  currencyFlag,
  currencyName = "GBP",
  amount = "2.50",
  rate = "0.00",
  isActive,
}) => {
  return (
    <>
      <div className="transfer-info">
        <h1 className="transfer-info__transfer"> Transfer </h1>
        <h1 className="transfer-info__heading"> Make Transfer </h1>
        <p className="transfer-info__content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim nam
          inventore deserunt id? Rem minima dolorem asperiores perferendis sed
          aspernatur. Dolorem nostrum voluptatibus dolore odit provident minima
          reiciendis dignissimos iste.
        </p>
      </div>

      <div
        className={isActive ? "transfer transfer__active" : "transfer"}
      ></div>
      <div className="receipt-container">
        <img className="transfer__flag" src={currencyFlag} />
        <p className="transfer__currency">{currencyName}</p>
        <p className="transfer__amount"> {amount}</p>
        <p className="transfer__rate">{rate}</p>
        {/* Put button component here when we have a button element. */}
        {/* Button text/effect needs to be different depending on isActive */}
        {/* button class should be "transfer__object__button" for SCSS compatability. */}
      </div>
    </>
  );
};

export default Transfer;
