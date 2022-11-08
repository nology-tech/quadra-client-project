import "./LoggedIn.scss";
import dropDown from "../../assets/images/dropDown.svg";
import profilePic from "../../assets/images/profilePic.svg";


const LoggedIn = ({firstName, lastName}) => {
    return (
        <div className="userProfile">
            <p className="userProfile__name">{firstName} {lastName} Samantha Brooks</p>
            <img className="userProfile__pic" src={profilePic} alt="user profile picture"></img>
            <img className="userProfile__dropDown" src={dropDown} alt="dropDown arrow"></img>
        </div>
    );
}

export default LoggedIn;