import "./SignIn.scss";
import Logo from "../../components/Logo/Logo";
import Button from "../../components/Button/Button";
import SignUp from "../../pages/SignUp/SignUp";
import Login from "../Login/Login";

const SignIn = ({ buttonText, isLogin }) => {
    const isTextDark = true;
    return (
        <div className="signIn">
            <div className="signIn__nav">
                <div className="signIn__nav-company">
                    <Logo isTextDark={isTextDark}/>
                </div>
                <div className="signIn__nav-button">
                    <Button buttonText={buttonText} />
                </div>
            </div>
            <div className="signIn__main">
            <div className="signIn__main--login">
                {isLogin? <Login /> : <SignUp />}
            </div>
            </div>
        </div>
    )
}

export default SignIn;