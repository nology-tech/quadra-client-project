import "./SignIn.scss";
import Logo from "../../components/Logo/Logo";
import Button from "../../components/Button/Button";
import SignUp from "../../pages/SignUp/SignUp";
import Login from "../Login/Login";

const SignIn = ({ buttonText, isLogin }) => {
  return (
    <div className="signIn">
      <div className="signIn__nav">
        <div className="signIn__nav-company">
          <img className="signIn__nav-company--logo" src={logo}></img>
          <p className="signIn__nav-company--name">Synergy</p>
        </div>
        <div className="signIn__nav-button">
          <Button buttonText={buttonText} />
        </div>
      </div>
      <div className="signIn__main">{isLogin ? <Login /> : <SignUp />}</div>
    </div>
  );
};

export default SignIn;
