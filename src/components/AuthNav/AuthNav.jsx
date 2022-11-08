import "./AuthNav.scss";
import Logo from "../Logo/Logo";
import Button from "../Button/Button";

const AuthNav = ({ isLogin }) => {
  return (
    <div className="authNav">
      <Logo isTextDark={true} />
      <Button
        classNaming="largeButton"
        buttonText={isLogin ? "Login" : "Sign Up"}
        handleClick={""}
      />
    </div>
  );
};

export default AuthNav;
