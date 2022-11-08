import "./ContactContent.scss";
import Contacts from "../../components/Contacts/Contacts";

const ContactContent = () => {
    return (
        <div className="contactList__content">
            <h3>Contact List</h3>
            <p>All your friends and family financial details in one place. Easily transfer currency internationally at the best possible rates.</p>
            <div className="contactList__headings">
                <h5>Name</h5>
                <h5>Sort Code</h5>
                <h5>Account No</h5>
                <h5>Bank</h5>
                <h5>IBAN</h5>
            </div>
            <div className="contactList__list">
                <Contacts 
                    bankImage={""}
                    userName={"Erik Dare"}
                    sortCode={"110063"}
                    accNo={"10840366"}
                    bankName={"Halifax PLC"}
                    iban={"GB27354355682"}
                />
            </div>
        </div>
    )
}