import "./AccountPage.scss";
import React from "react";
import {Link,} from 'react-router-dom';
import LoggedIn from "../../components/LoggedIn/LoggedIn";
import RecentTransaction from "../../components/RecentTransaction/RecentTransaction";
import Button from "../../components/Button/Button"
import BankInfoSquare from "../../components/BankInfoSqure/BankInfoSquare";

const AccountPage = ({firstName = "Erik", lastName = "Drew"}) => { 

    return (
            <div className="account">
                <div className="account__loggedIn">
                    <LoggedIn/>
                </div>
                    <div>
                        <p className="account__contacts">Contacts / <span className="changeColor">{firstName}{lastName}</span> </p>
                        <p className="account__heading">Account Details</p>
                    </div>
                <div className="account__infoWrapper">
                    <div className="account__singleContact">
                        <BankInfoSquare />
                    </div>
                    <div className="account__transferRow">
                        <p>Want to make a transfer?</p>
                        <Link to={"/Transfer"}><Button buttonText={"Transfer"} buttonClass={"corneredButton"}/></Link>
                    </div>
                    <div className="account__transactions">
                        <RecentTransaction  
                        transactionId={25} 
                        senderAmount={100} 
                        payeeAmount={500} 
                        rate={2.00} 
                        date={"01/01/1900"}/>
                    </div>
                </div>
            </div>
    )
}

export default AccountPage;