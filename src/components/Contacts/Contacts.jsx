import "./Contacts.scss";

const Contacts = ({bankImage, userName, sortCode, accNo, bankName, iban, deleteIcon}) =>{

    return(
        <div className="contacts">
            <img className="contacts__image contacts__image--bankImage" src={bankImage}></img>
            <p className="contacts__userName">{userName}</p>
            <p className="contacts__sortCode">{sortCode}</p>
            <p className="contacts__accNo">{accNo}</p>
            <p className="contacts__bankName">{bankName}</p>
            <p className="contacts__iban">{iban}</p>
            <img className="contacts__image contacts__image--deleteIcon" src={deleteIcon}></img>
        </div>
    )
}

export default Contacts;