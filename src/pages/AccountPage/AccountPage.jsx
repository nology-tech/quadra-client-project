import "./AccountPage.scss";

import Nav from "../Nav/Nav";
import LoggedIn from "../../components/LoggedIn/LoggedIn";
import RecentTransaction from "../../components/RecentTransaction/RecentTransaction";
import Button from "../../components/Button/Button"

const AccountPage = ({firstName, lastName}) => {
    firstName="Erik ";
    lastName="Drew"

    

    return (
        <>
            <Nav className="sidenav"/>
            <div className="accountWrapper">
                    <LoggedIn/>
                    <div>
                        <p className="accountWrapper__contacts">Contacts / <span className="changeColor">{firstName}{lastName}</span> </p>
                        <p className="accountWrapper__heading">Account Details</p>
                    </div>
                <div className="accountWrapper__info">
                    <div className="__leftBox">
                        <p>Placeholder text - INSERT COMPONENT HERE</p>
                        <div className="accountWrapper__transferRow">
                            <p>Want to make a transfer?</p>
                            <Button buttonText={"Transfer"}/>
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
            </div>
            
        </>
    )
}

export default AccountPage;