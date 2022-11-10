import "./BankInfoSquare.scss";

const BankInfoSquare = ({firstName, lastName, img, sortCode, accNum, iban}) => {

  return(
      <div className = "bankContainer">
        <div className="bankContainer__row" id="row-one">
          <div className="bankContainer__leftRow"><p>{firstName} {lastName}</p></div>
          <p className="bankContainer__heading">{img}</p>
        </div>
        <div className="bankContainer__row">
          <p className="bankContainer__heading">Sort Code</p>
          <p className="bankContainer__data">{sortCode}</p>
        </div>
        <div className="bankContainer__row">
          <p className="bankContainer__heading">Account No</p>
          <p className="bankContainer__data">{accNum}</p>
        </div>
        <div className="bankContainer__row">
          <p className="bankContainer__heading">IBAN</p>
          <p className="bankContainer__data">{iban}</p>
        </div>
      </div>
  )
}

export default BankInfoSquare;