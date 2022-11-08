import "./ContactContent.scss";
import ContactItem from "../../components/ContactItem/ContactItem";

const ContactContent = () => {
    return (
        <div className="contactList">
            <h3 className="contactList__title">Contact List</h3>
            <p className="contactList__desc">All your friends and family financial details in one place. Easily transfer currency internationally at the best possible rates.</p>
            <div className="contactList__headings">
                <h5 className="contactList__userName">Name</h5>
                <h5 className="contactList__sortCode">Sort Code</h5>
                <h5 className="contactList__accNum">Account No</h5>
                <h5 className="contactList__bank">Bank</h5>
                <h5 className="contactList__iban">IBAN</h5>
            </div>
            <div className="contactList__list">
                <ContactItem 
                    bankImage={""}
                    userName={"Erik Dare"}
                    sortCode={"110063"}
                    accNo={"10840366"}
                    bankName={"Halifax PLC"}
                    iban={"GB56HLFX11005310840366"}
                />
            </div>
        </div>
    )
}

export default ContactContent;