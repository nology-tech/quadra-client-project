import "./AccountPage.scss";
import React from "react";
import {
	BrowserRouter as Router,
	Link,
} from 'react-router-dom';


import Nav from "../Nav/Nav";
import LoggedIn from "../../components/LoggedIn/LoggedIn";
import RecentTransaction from "../../components/RecentTransaction/RecentTransaction";
import Button from "../../components/Button/Button"
import Transfer from "../../pages/Transfer/Transfer"
import ContactList from "../ContactList/ContactList";
import ContactContent from "../../components/ContactContent/ContactContent";
import BankInfoSqaure from "../../components/BankInfoSqure/BankInfoSquare";

const AccountPage = ({firstName = "Erik", lastName = "Drew"}) => { 

    return (
        <>
            <div className="accountWrapper">
                <div className="loggedIn">
                    <LoggedIn/>
                </div>
                    <div>
                        <p className="accountWrapper__contacts">Contacts / <span className="changeColor">{firstName}{lastName}</span> </p>
                        <p className="accountWrapper__heading">Account Details</p>
                    </div>
                <div className="accountWrapper__info">
                    <div className="accountWrapper__singleContact">
                        <BankInfoSqaure />
                    </div>
                    <div className="accountWrapper__transferRow">
                        <p>Want to make a transfer?</p>
                        <Link to={"/Transfer"}><Button buttonText={"Transfer"} buttonClass={"corneredButton"}/></Link>
                    </div>
                    <div className="accountWrapper__recentTransaction">
                        <RecentTransaction  
                        transactionId={25} 
                        senderAmount={100} 
                        payeeAmount={500} 
                        rate={2.00} 
                        date={"01/01/1900"}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AccountPage;