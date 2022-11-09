import "./AccountPage.scss";
import React from "react";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link,
    Switch
} from 'react-router-dom';


import Nav from "../Nav/Nav";
import LoggedIn from "../../components/LoggedIn/LoggedIn";
import RecentTransaction from "../../components/RecentTransaction/RecentTransaction";
import Button from "../../components/Button/Button"
import Transfer from "../../pages/Transfer/Transfer"
import ContactList from "../ContactList/ContactList";
import ContactContent from "../../components/ContactContent/ContactContent";

const AccountPage = ({firstName, lastName}) => {
    firstName="Erik ";
    lastName="Drew"

    

    return (
        <>
            

            
            <Nav className="sidenav"/>
            <div className="accountWrapper">
                <div className="loggedIn">
                    <LoggedIn/>
                </div>
                    <div>
                        <p className="accountWrapper__contacts">Contacts / <span className="changeColor">{firstName}{lastName}</span> </p>
                        <p className="accountWrapper__heading">Account Details</p>
                    </div>
                <div className="accountWrapper__info">
                    <div className="__leftBox">
                        <p>Placeholder text - INSERT COMPONENT HERE</p>
                        <div className="accountWrapper__transferRow">
                            <p>Want to make a transfer?</p>
                            
                                

                            {/* <Route path="Transfer/Transfer" element={<Transfer/>}><Button buttonText={"Transfer"} /></Route> */}

                            <Link to={"/Transfer"}><Button buttonText={"Transfer"} buttonClass={"corneredButton"}/></Link>
                            
                            

                            

                                
                            

                            
                            
                            
                            
                            
                        </div>
                    </div>
                    <div className="recentTransaction">
                        <RecentTransaction transactionId={25} senderAmount={100} payeeAmount={500} rate={2.00} date={"01/01/1900"}/>
                    </div>
                </div>
                <div>
                    <p className="contactsList">Your Contacts</p>
                    <p>All your friends and family financial details in one place. Easily <br></br>
                    transfer currency internationally at the best possible rates.</p>
                </div>
                <ContactContent/>
            </div>
            
            
        </>
    )
}

export default AccountPage;