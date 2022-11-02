import "./Logo.scss";
import LogoImage from "../../assets/images/logoImage.png";

const Logo = () => {
    return(
        <div className="logo__header">
            <img src={LogoImage} alt="logo" className="logo__img"></img>
            <h1>Synergy</h1>
        </div>
    )
}

export default Logo;