import "./LandingNav.scss";

const LandingNav = ({isFooter}) => {

    return(
        <ul className="navList">
            <li className="navList__listItem"><a  href="" className={isFooter ? "navList__anchor--footer-selected" : "navList__anchor--header-selected" }>Home</a></li>
            <li className="navList__listItem"><a href="" className="navList__anchor navList__anchor--unselected">Features</a></li>
            <li className="navList__listItem"><a href="" className="navList__anchor navList__anchor--unselected">About</a></li>
            <li className="navList__listItem"><a href="" className="navList__anchor navList__anchor--unselected">Contact Us</a></li>
        </ul>
     
    )
}

export default LandingNav;