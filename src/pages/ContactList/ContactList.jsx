import "./ContactList.scss";
import ContactContent from "../../components/ContactContent/ContactContent";
// import { getUserContacts } from "../../utils/apiUtils";
// import { useState } from "react";

const ContactList = () => {

// const [userData, setUserData] = UseState([]);

    return (
        <div className="contactList">
            <ContactContent className="contactList__main" />
        </div>
    )
}

export default ContactList;