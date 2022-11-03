import "./SignIn.scss";
import logo from "../../assets/images/logo.png";
import Button from "../../components/Button/Button";
const SignIn = ({ buttonText }) => {
    return (
        <div className="signIn">
            <div className="signIn__nav">
                <div className="signIn__nav-company">
                    <img
                        className="signIn__nav-company--logo"
                        src={logo}
                    ></img>
                    <p className="signIn__nav-company--name">Synergy</p>
                </div>
                <div className="signIn__nav-button">
                    <Button buttonText={buttonText} />
                </div>
            </div>
            <div className="signIn__main">

            </div>
        </div>
    )
}

export default SignIn;