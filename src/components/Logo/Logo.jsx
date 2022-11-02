import LogoImg from "../../assets/images/logo.png";
import "./Logo.scss";

const Logo = ({isTextDark, width, height}) => {

    return (

        <div className="logo" style={{width: `${width}rem`, height: `${height}rem`}}>
            <img src={LogoImg} alt="Synergy Logo" className="logo__logo"></img>
            <p className={isTextDark ? "logo__darkText" : "logo__lightText"} style={{fontSize:`${height/2.5}rem`}}>Synergy</p>
        </div>

    );

}

export default Logo;