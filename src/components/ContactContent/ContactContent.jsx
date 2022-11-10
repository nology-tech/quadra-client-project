import "./ContactContent.scss";
import BankContact from "../BankContact/BankContact";
import {useEffect, useState} from "react";
import { getUserContacts } from "../../utils/apiUtils";
import creditCard from "../../assets/images/credit-card.png";
import Searchbar from "../Searchbar/Searchbar";
import Button from "../../components/Button/Button";

const ContactContent = ({numContacts=4}) => {
    const [allContacts, setAllContacts] = useState([]);

    const [searchText, setSearchText] = useState("");
    const [userContacts, setUserContacts] = useState();



    const getData = async () => {
        let contacts = await getUserContacts();
        contacts = contacts.slice(0, Math.min(numContacts, contacts.length) )
        setAllContacts(contacts)
        setUserContacts(
            contacts.map((item) => {
                return (
                    <BankContact 
                        image_url={creditCard} 
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
        )
    
        }
            
    useEffect(() => {
        getData()
    
    }, [])

    useEffect(()=>{
        const filteredContacts = (allContacts.filter(contact => contact.contactName.toLowerCase().includes(searchText.toLowerCase())));
        setUserContacts(
            filteredContacts.map((item) => {
                return (
                    <BankContact 
                        image_url={creditCard} 
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
        )
    },[searchText])

    return (
        <div className="contactList">
            <h3 className="contactList__title">Contact List</h3>
            <div className="contactList__options">
                <p className="contactList__desc">All your friends and family financial details in one place. Easily transfer currency internationally at the best possible rates.</p>
                <Searchbar saveSearchText={setSearchText} />
            
                <Button buttonText={"+ Add"} buttonClass={"addContact"} />
            </div>
            <div className="contactList__options contactList__headings">
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