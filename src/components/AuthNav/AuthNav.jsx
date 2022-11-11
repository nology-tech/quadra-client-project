import "./AuthNav.scss";
import Logo from "../Logo/Logo";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

const AuthNav = ({ isLogin }) => {
  return (
    <div className="authNav">
      <Link to={"/"}>
        <Logo isTextDark={true} />
      </Link>

      {isLogin ? (
        <Link to={"/login"}>
          {" "}
          <Button
            buttonClass="largeButton"
            buttonText={"Login"}
            handleClick={""}
          />
        </Link>
      ) : (
        <Link to={"/signup"}>
          <Button
            buttonClass="largeButton"
            buttonText={"Sign Up"}
            handleClick={""}
          />
        </Link>
      )}
    </div>
  );
};

export default AuthNav;
