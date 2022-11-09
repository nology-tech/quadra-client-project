import "./BankInfoSquare.scss";



const BankInfoSqaure = ({firstName,lastName,img,sortCode,accNum,iban}) => {
  firstName="erik";lastName="drew";img="test";sortCode="2728729";accNum="929292929929292";iban="7478489383838838"

  return(
    <>
    <div className = "container">
      <div className="row">

      <span>{firstName} {lastName}</span>
      <p>This is where image will go</p>
      </div>
      <div className="row">

      <p>Sort Code</p>
      <p>{sortCode}</p>
      </div>
      <div className="row">

      <p>Account No</p>
      <p>{accNum}</p>
      </div>
      
      <div className="row">

      <p>IBAN</p>
      <p>{iban}</p>
      </div>

    </div>
    </>
  )


}

export default BankInfoSqaure;