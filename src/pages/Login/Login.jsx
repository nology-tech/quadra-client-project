import "./Login.scss";
import hand from "../../assets/images/hello.svg";
import InputBox from "../../components/InputBox/InputBox";
import Logo from "../../components/Logo/Logo";
import AuthNav from "../../components/AuthNav/AuthNav";
import Button from "../../components/Button/Button";
import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import app from "../../firebase.js";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getUserHoldings } from "../../utils/apiUtils";

const Login = ({ saveUser, setDeposit }) => {
  const [password, setPassword] = useState();
  const [email, setEmail] = useState("");
  const [invalidEmail, setInvalidEmail] = useState("");
  const [invalidPassword, setInvalidPassword] = useState();
  const navigate = useNavigate();
  const isTextDark = true;

  const emailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  const auth = getAuth(app);

  useEffect(() => {
    validateEmail();
  }, [email]);

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const validateEmail = () => {
    if (email == "") {
      setInvalidEmail("");
    } else if (!emailRegex.test(email)) {
      setInvalidEmail("Please enter a valid email");
    } else {
      setInvalidEmail("");
    }
    
  };
  const handleLogin = async () => {
    const userData = await loginAuth();
    if (userData != undefined) {
      const totalDeposit = await getUserHoldings(userData.uid);
      saveUser(userData);
      setDeposit(totalDeposit);
      setInvalidPassword("");
      setInvalidEmail("");
      navigate("/wallet");
    }
  };

  const loginAuth = async () => {
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      return response.user;
    } catch (error) {
      const errorCode = error.code;
      if (errorCode == "auth/wrong-password") {
        setInvalidPassword("Incorrect password.Please try again");
      } else {
        setInvalidEmail("Incorrect email. Please try again");
      }
    }
  };

  return (
    <div className="signIn">
      <AuthNav isLogin={false} />
      <div className="signIn__form">
        <div className="signIn__contents">
          <div className="signIn__logo">
            <Logo isTextDark={isTextDark} />
          </div>
          <div className="signIn__welcome">
            <p className="signIn__message">Welcome Back!</p>
            <img className="signIn__img" src={hand} alt="welcome"></img>
          </div>
          <p className="signIn__intro">
            Lorem ipsium dolor sit amet, consectetur adipiscing elit.
          </p>
          <InputBox
            title="Email"
            inputType="text"
            errorMessage={invalidEmail}
            successMessage=""
            onChange={handleEmail}
          />
          <InputBox
            title="Password"
            inputType="password"
            errorMessage={invalidPassword}
            successMessage=""
            onChange={handlePassword}
          />
          <div className="signIn__options">
            <p className="signIn__account">Don&apos;t have an account? </p>
            <Link to={"/signup"} className="signIn__link">
              Sign Up
            </Link>
            <p className="signIn__forgot">Forgotten Password?</p>
          </div>
          <div className="signIn__line"></div>
          <div className="signIn__submit">
            <Button
              buttonClass="largeButton"
              buttonText={"Login"}
              handleClick={handleLogin}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
