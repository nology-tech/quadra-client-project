import "./TransferSend.scss";

const TransferSend = () => {
  /*
    { name, accNum, code, total, fundsRem }
  */
  return (
    <>
      <div className="container">
        <h1>Sam</h1>
        <div className="info-row">
          <h2>Account Number</h2>
          <p className="info-row-right">123</p>
        </div>
        <div className="info-row">
          <h2>Sort Code</h2>
          <p className="info-row-right">000</p>
        </div>
        <div className="info-row">
          <h2>Total</h2>
          <p className="info-row-right">55</p>
        </div>
        <div className="info-row">
          <h2>Funds Remaining</h2>
          <p className="info-row-right">1</p>
        </div>
      </div>
    </>
  );
};

export default TransferSend;
