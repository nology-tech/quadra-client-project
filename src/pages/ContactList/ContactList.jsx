import "./ContactList.scss";
import ContactContent from "../../components/ContactContent/ContactContent";
import LoggedIn from "../../components/LoggedIn/LoggedIn";

const ContactList = () => {

    return (
        <div className="contactList">
            <div className="logged-in-container">
                <LoggedIn/>
            </div>
            <ContactContent numContacts={10} />
        </div>
    )
}

export default ContactList;