import "./BankInfoSquare.scss";



const BankInfoSqaure = ({firstName,lastName,img,sortCode,accNum,iban}) => {
  firstName="erik";lastName="drew";img="test";sortCode="2728729";accNum="929292929929292";iban="7478489383838838"

  return(
    <>
      <div className = "container">
        <div className="row" id="row-one">
          <div className="inner-left-row"><p>{firstName} {lastName}</p></div>
          <p className="heading">{img}</p>
        </div>
        <div className="row">
          <p className="heading">Sort Code</p>
          <p>{sortCode}</p>
        </div>
        <div className="row">
          <p className="heading">Account No</p>
          <p>{accNum}</p>
        </div>
        <div className="row">
          <p className="heading">IBAN</p>
          <p>{iban}</p>
        </div>
      </div>
    </>
  )
}

export default BankInfoSqaure;