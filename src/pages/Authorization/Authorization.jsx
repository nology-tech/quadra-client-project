import "./Authorization.scss";
import Logo from "../../components/Logo/Logo";
import Button from "../../components/Button/Button";
import SignUp from "../SignUp/SignUp";
import Login from "../Login/Login";

const Authorization = ({ buttonText, isLogin }) => {
  const isTextDark = true;
  return (
    <div className="signIn-container">
      <div className="signIn-container__nav">
        <div className="signIn-container__company">
          <Logo isTextDark={isTextDark} />
        </div>
        <div className="signIn-container__button">
          <Button buttonClass="largeButton" buttonText={buttonText} />
        </div>
      </div>
      <div className="signIn-container__main">
        {isLogin ? <Login /> : <SignUp />}
      </div>
    </div>
  );
};

export default Authorization;
