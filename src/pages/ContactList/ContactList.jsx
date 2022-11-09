import "./ContactList.scss";
import ContactContent from "../../components/ContactContent/ContactContent";

const ContactList = () => {

    return (
        <div className="contactList">
            <ContactContent numContacts={10} />
        </div>
    )
}

export default ContactList;