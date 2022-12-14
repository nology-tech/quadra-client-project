import "./ContactList.scss";
import ContactContent from "../../components/ContactContent/ContactContent";
import LoggedIn from "../../components/LoggedIn/LoggedIn";

const ContactList = ({userId}) => {

    return (
        <div className="contactList">
            <div className="logged-in-container">
                <LoggedIn/>
            </div>
            <ContactContent numContacts={10} isWallet={false} userId={userId} />
        </div>
    )
}

export default ContactList;