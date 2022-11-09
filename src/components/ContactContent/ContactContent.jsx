import "./ContactContent.scss";
import BankContact from "../BankContact/BankContact";
import {useEffect, useState} from "react";
import { getUserContacts } from "../../utils/apiUtils";
import Searchbar from "../Searchbar/Searchbar";
import Button from "../../components/Button/Button";

const ContactContent = () => {
    const [allContacts, setAllContacts] = useState([]);

    const getData = async () => {
        const contacts = await getUserContacts();
        setAllContacts(contacts)
    }
    useEffect(() => {
        getData();
    }, [])

    const userContacts = allContacts.map((item) => {
        return (
            <BankContact 
                image_url={""} 
                userName={item.contactName}
                sortCode={item.sortCode} 
                accNum={item.accountNumber} 
                bank={item.bankName} 
                iban={""} 
                isTransfer={false}
                key={item.id}
        />
        )
    })

    return (
        <div className="contactList">
            <h3 className="contactList__title">Contact List</h3>
            <div>
                <p className="contactList__desc">All your friends and family financial details in one place. Easily transfer currency internationally at the best possible rates.</p>
                <Searchbar /> 
                <Button buttonText={"+ Add"} buttonClass={"addContact"} />
            </div>
            <div className="contactList__headings">
                <h5 className="contactList__userName">Name</h5>
                <h5 className="contactList__sortCode">Sort Code</h5>
                <h5 className="contactList__accNum">Account No</h5>
                <h5 className="contactList__bank">Bank</h5>
                <h5 className="contactList__iban">IBAN</h5>
            </div>
            <div className="contactList__list">
                <div>{userContacts}</div>
            </div>
        </div>
    )
}

export default ContactContent;