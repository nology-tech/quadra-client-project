import "./LandingNav.scss";

const LandingNav = ({isFooter}) => {

    return(
        <ul className="navlist">
            <li><a href="" className={isFooter ? "footer-selected" : "header-selected" }>Home</a></li>
            <li><a href="" className="unselected">Features</a></li>
            <li><a href="" className="unselected">About</a></li>
            <li><a href="" className="unselected">Contact Us</a></li>
        </ul>
     
    )
}

export default LandingNav;