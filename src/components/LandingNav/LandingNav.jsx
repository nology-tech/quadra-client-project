import "./LandingNav.scss";

const LandingNav = ({isFooter}) => {

    return(
        <ul className="navlist">
            <li href="" className={isFooter ? "footer-selected" : "header-selected" }>Home</li>
            <li href="">Features</li>
            <li href="">About</li>
            <li href="">Contact Us</li>
        </ul>
     
    )
}

export default LandingNav;