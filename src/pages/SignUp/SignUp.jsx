import "./SignUp.scss";
import Button from "../../components/Button/Button";
import Logo from "../../components/Logo/Logo";
import InputBox from "../../components/InputBox/InputBox";
import { useNavigate, Link } from "react-router-dom";

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from "../../firebase";
import { useState, useEffect } from "react";

import AuthNav from "../../components/AuthNav/AuthNav";
import { storeUserDetails } from "../../utils/apiUtils";

const SignUp = ({ saveUser }) => {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [emailSuccess, setEmailSuccess] = useState("");
  const [password1Error, setPassword1Error] = useState("");
  const [password1Success, setPassword1Success] = useState("");
  const [password2Error, setPassword2Error] = useState("");
  const [password2Success, setPassword2Success] = useState("");
  const navigate = useNavigate();

  const passRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
  const emailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

  const auth = getAuth(app);

  const validateInputs = () => {
    let result = true;
    setEmailError("");
    setEmailSuccess("");
    setPassword1Error("");
    setPassword1Success("");
    setPassword2Error("");
    setPassword2Success("");
    if (!emailRegex.test(registerEmail)) {
      setEmailError("Please enter a valid email");
      result = false;
    } else {
      setEmailSuccess("Successful email entered");
    }
    if (confirmPassword != registerPassword) {
      setPassword2Error("Error - passwords do not match!");
      result = false;
    } else {
      setPassword2Success("Passwords Match");
    }
    if (!passRegex.test(registerPassword)) {
      setPassword1Error(
        "Error - password must contain at least 6 characters, 1 number, 1 uppercase letter, and 1 symbol"
      );
      result = false;
    }
    if (
      confirmPassword === registerPassword &&
      passRegex.test(registerPassword)
    ) {
      setPassword1Success("Password meets requirements.");
    }
    if (registerEmail == "") {
      setEmailError("");
    }
    if (registerPassword == "" && confirmPassword == "") {
      setPassword1Error("");
      setPassword1Success("");
      setPassword2Error("");
      setPassword2Success("");
    }
    return result;
  };

  useEffect(() => {
    validateInputs();
  }, [registerEmail, registerPassword, confirmPassword]);

  const register = () => {
    if (validateInputs()) {
      createUserWithEmailAndPassword(auth, registerEmail, registerPassword)
        .then((userCredential) => {
          const user = userCredential.user;
          saveUser(user);
          storeUserDetails(user.uid, user.email);
          navigate("/wallet");
        })
        .catch((error) => {
          console.error(error.code);
        });
    }
  };

  return (
    <div className="signUp">
      <AuthNav isLogin={true} />
      <div className="signUp__form">
        <div className="signUp__contents">
          <div className="signUp__company">
            <Logo isTextDark={true} />
          </div>

          <h1 className="signUp__header">Create an account</h1>
          <p className="signUp__headerText">
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
          </p>

          <div className="signUp__input">
            <InputBox
              className="signUp__input signUp__input--email"
              title="Email"
              inputType="text"
              errorMessage={emailError}
              successMessage={emailSuccess}
              onChange={(e) => setRegisterEmail(e.target.value)}
            />

            <InputBox
              className="signUp__input signUp__input--password"
              title="Password"
              inputType="text"
              errorMessage={password1Error}
              successMessage={password1Success}
              onChange={(e) => setRegisterPassword(e.target.value)}
            />

            <InputBox
              className="signUp__input signUp__input--confirmPassword"
              title="Confirm Password"
              inputType="text"
              errorMessage={password2Error}
              successMessage={password2Success}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>

          <div className="signUp__text">
            <p className="signUp__text signUp__text--account">
              Already have an account?
            </p>
            <Link to={"/login"} className="signUp__text signUp__text--login">
              Login
            </Link>
          </div>

          <div className="signUp__continue">
            <Button
              buttonClass="largeButton"
              buttonText="Continue  >"
              handleClick={register}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
