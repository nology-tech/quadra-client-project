import "./AccountPage.scss";

import Nav from "../Nav/Nav";
import LoggedIn from "../../components/LoggedIn/LoggedIn";
import RecentTransaction from "../../components/RecentTransaction/RecentTransaction";

const AccountPage = ({firstName, lastName}) => {
    firstName="Erik ";
    lastName="Drew"

    

    return (
        <div>
            <Nav className="sidenav"/>
            <div className="accountWrapper">
                    <LoggedIn/>
                    <div>
                        <p className="contactPath">Contacts / <span className="changeColor">{firstName}{lastName}</span> </p>
                        <p className="heading">Account Details</p>
                    </div>
                <div className="accountWrapper__info">
                    <div className="left-hand-box">
                        <p>Placeholder text</p>

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
        </div>
    )
}

export default AccountPage;