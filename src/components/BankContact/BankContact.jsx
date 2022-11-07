import "./BankContact.scss";
import bin from "../../assets/images/bin.png";

const BankContact = ({image_url, firstName, lastName, sortCode, accNum, bank, iban, isTransfer=false}) => {
    return (
        <div className="bank-contact">
            <img className="bank-contact__img" src={image_url} alt="bank icon" />
            <p className="bank-contact__name">{firstName} {lastName}</p>
            <p className="bank-contact__sortCode">{sortCode}</p>
            <p className="bank-contact__accNum">{accNum}</p>
            <p className={isTransfer ? "bank-contact__bank hide" : "bank-contact__bank"}>{bank}</p>
            <p className={isTransfer ? "bank-contact__iban hide" : "bank-contact__iban"}>{iban}</p>
            <img className={isTransfer ? "bank-contact__bin hide" : "bank-contact__bin"} src={bin} alt="bin"/>
        </div>
    )
}

export default BankContact;