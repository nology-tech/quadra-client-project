import LogoImg from "../../assets/images/logo.png";
import "./Logo.scss";

const Logo = ({isTextDark}) => {

    return (

        <div className="logo">
            <img src={LogoImg} alt="Synergy Logo" className="logo__logo"></img>
            <p className={isTextDark ? "logo__darkText" : "logo__lightText"}>Synergy</p>
        </div>

    );

}

export default Logo;